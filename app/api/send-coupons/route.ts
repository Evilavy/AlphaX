import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { NextResponse } from "next/server";

// This should come from a database in a real app
const usersToEmail = ["nguinbert@gmail.com", "evilavy250704@gmail.com"];

export async function POST(req: Request) {
  const results = [];

  for (const email of usersToEmail) {
    try {
      // 1. Generate a unique discount code
      const code = `XPECT-${uuidv4().split("-")[0].toUpperCase()}`;
      const expiryDate = new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      ).toISOString();

      // 2. Create the promo code via Creem API (Your existing logic)
      await axios.post(
        "https://test-api.creem.io/v1/discounts",
        {
          name: "Founder's Offer", // More specific name
          code,
          type: "fixed",
          amount: 200, // $2.00
          currency: "USD",
          expiry_date: expiryDate,
          max_redemptions: 1,
          duration: "once",
          applies_to_products: ["prod_6yxa3yuVPgwuTHIhkjathQ"],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.CREEM_API_KEY,
          },
        }
      );

      // 3. Prepare the email transporter
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT || "587", 10),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      });

      const emailSubject =
        "🚀 It's Here! Your Exclusive XpectViral Launch Offer";

      // 4. Send the beautifully designed email
      await transporter.sendMail({
        from: `"Evilavy from XpectViral" <${process.env.EMAIL_FROM}>`,
        to: email,
        subject: "Your early access to XpectViral",
        html: `
          <div style="font-family: sans-serif; color: #111; font-size: 16px; line-height: 1.5;">
            <p>Hey,</p>
      
            <p>Thanks again for joining the XpectViral waitlist. The tool is finally live, and I wanted to personally send you something to say thanks for being early.</p>
      
            <p>Here’s your personal code (valid for 7 days): <strong>${code}</strong></p>
      
            <p>You can use it here: <a href="https://YOUR_CHECKOUT_PAGE_URL?promo_code=${code}">https://xpectviral.com/launch</a></p>
      
            <p>Appreciate your early support 🙏</p>
      
            <p>– Evilavy</p>
          </div>
        `,
      });

      results.push({ email, status: "sent", code });
    } catch (err) {
      results.push({ email, status: "error", error: (err as Error).message });
    }
  }

  return NextResponse.json({ results });
}
