// pages/api/creem-webhook.ts
import { NextApiRequest, NextApiResponse } from "next";
import * as crypto from 'crypto';
import { createClient } from "@supabase/supabase-js";

// Simple CORS headers; replace or extend with your own if needed
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, creem-signature",
};

function generateSignature(payload: string, secret: string): string {
  return crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Handle preflight
  if (req.method === "OPTIONS") {
    Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Apply CORS headers
  Object.entries(corsHeaders).forEach(([k, v]) => res.setHeader(k, v));

  // Grab and validate the signature header
  const signature = req.headers["creem-signature"];
  if (!signature || Array.isArray(signature)) {
    return res.status(401).send("Signature manquante");
  }

  // Stringify the parsed JSON body for HMAC verification
  let bodyText: string;
  try {
    bodyText = JSON.stringify(req.body);
  } catch (err) {
    console.error("Error serializing body:", err);
    return res.status(400).send("Invalid JSON body");
  }

  // Verify HMAC using the helper
  const SECRET = process.env.CREEM_WEBHOOK_SECRET || "";
  const computedSignature = generateSignature(bodyText, SECRET);

  console.log("=== DEBUG WEBHOOK ===");
  console.log("All headers:", req.headers);
  console.log("Body:", bodyText);
  console.log("Computed Signature:", computedSignature);
  console.log("=== END DEBUG ===");

  if (computedSignature !== signature) {
    console.error("Signature invalide !");
    return res.status(401).send("Signature invalide");
  }

  // Parse event (we already have it as req.body)
  const event = req.body;

  if (event.eventType === "checkout.completed") {
    const session = event.object;
    const supabaseUserId = session.metadata?.supabase_user_id;
    if (!supabaseUserId) {
      console.error("Supabase user ID not found in metadata");
      return res
        .status(400)
        .send("Webhook Error: Supabase user ID not found");
    }

    console.log(
      `Webhook: Processing successful payment for user: ${supabaseUserId}`
    );

    const supabaseAdmin = createClient(
      process.env.SUPABASE_URL ?? "",
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? ""
    );

    const { error } = await supabaseAdmin
      .from("profiles")
      .update({ has_paid: true })
      .eq("id", supabaseUserId);

    if (error) {
      console.error("Error updating profile:", error);
      return res
        .status(500)
        .json({ error: "Webhook handler error", details: error.message });
    }

    console.log(`User ${supabaseUserId} marked as paid.`);
  } else {
    console.log(`Unhandled event type: ${event.eventType}`);
  }

  // Acknowledge receipt
  return res.status(200).json({ received: true });
}
