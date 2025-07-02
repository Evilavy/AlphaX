import WaitlistPromoEmail from '@/emails/waitlist-promo-email';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.EMAIL_SERVER_PASSWORD);

export async function GET() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'XpectViral <onboarding@resend.dev>',
      to: ['evilavypro@gmail.com'],
      subject: 'Your Exclusive Access to XpectViral is Here!',
      react: WaitlistPromoEmail({ promoCode: '0WYPNNT1NW', finalPrice: '$2.50' }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
} 