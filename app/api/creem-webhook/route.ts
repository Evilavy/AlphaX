
// app/api/creem-webhook/route.ts
import { NextResponse } from 'next/server';
import * as crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';

// Simple CORS headers; replace or extend with your own if needed
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, creem-signature',
};

function generateSignature(payload: string, secret: string): string {
  return crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
}

export async function OPTIONS() {
  return NextResponse.json(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function POST(request: Request) {
  // Apply CORS headers
  const headers = new Headers(corsHeaders);

  // Retrieve signature header
  const signature = request.headers.get('creem-signature');
  if (!signature) {
    return new NextResponse('Signature manquante', { status: 401, headers });
  }

  // Read raw body text
  const bodyText = await request.text();

  // Verify HMAC
  const SECRET = process.env.CREEM_WEBHOOK_SECRET || '';
  const computedSignature = generateSignature(bodyText, SECRET);

  console.log('=== DEBUG WEBHOOK ===');
  console.log('Headers:', Object.fromEntries(request.headers.entries()));
  console.log('Body:', bodyText);
  console.log('Computed Signature:', computedSignature);
  console.log('=== END DEBUG ===');

  if (computedSignature !== signature) {
    console.error('Signature invalide !');
    return new NextResponse('Signature invalide', { status: 401, headers });
  }

  // Parse JSON event
  let event: any;
  try {
    event = JSON.parse(bodyText);
  } catch (err) {
    console.error('Invalid JSON:', err);
    return new NextResponse('Invalid JSON body', { status: 400, headers });
  }

  if (event.eventType === 'checkout.completed') {
    const session = event.object;
    const supabaseUserId = session.metadata?.supabase_user_id;
    if (!supabaseUserId) {
      console.error('Supabase user ID not found in metadata');
      return new NextResponse(
        'Webhook Error: Supabase user ID not found',
        { status: 400, headers }
      );
    }

    console.log(
      `Webhook: Processing successful payment for user: ${supabaseUserId}`
    );

    const supabaseAdmin = createClient(
      process.env.SUPABASE_URL ?? '',
      process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
    );

    const { error } = await supabaseAdmin
      .from('profiles')
      .update({ has_paid: true })
      .eq('id', supabaseUserId);

    if (error) {
      console.error('Error updating profile:', error);
      return new NextResponse(
        JSON.stringify({
          error: 'Webhook handler error',
          details: error.message,
        }),
        { status: 500, headers }
      );
    }

    console.log(`User ${supabaseUserId} marked as paid.`);
  } else {
    console.log(`Unhandled event type: ${event.eventType}`);
  }

  // Acknowledge receipt
  return new NextResponse(JSON.stringify({ received: true }), {
    status: 200,
  });
}

