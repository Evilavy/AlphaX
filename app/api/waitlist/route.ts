import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import WaitlistEmail from "@/emails/waitlist-email";
import ConfirmationEmail from "@/emails/confirmation-email";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.EMAIL_SERVER_PASSWORD);
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // --- Supabase Logic ---
    const { error: supabaseError } = await supabase
      .from('waitlist')
      .insert({ email });

    // Handle potential errors, e.g., duplicate email
    if (supabaseError) {
      // 23505 is the code for 'unique_violation'
      if (supabaseError.code === '23505') {
        return NextResponse.json(
          { error: "This email is already on the waitlist" },
          { status: 400 }
        );
      }
      console.error('Supabase Error:', supabaseError);
      return NextResponse.json(
        { error: 'Failed to save email to the database.' },
        { status: 500 }
      );
    }
    // --- End Supabase Logic ---

    const adminEmail = process.env.WAITLIST_TO_EMAIL || "evilavypro@gmail.com";
    const fromEmail = process.env.EMAIL_FROM || "onboarding@resend.dev";

    // Send both emails in parallel
    const [adminResponse, userResponse] = await Promise.all([
      // Email to admin
      resend.emails.send({
        from: fromEmail,
        to: adminEmail,
        subject: "🎉 New Waitlist Signup!",
        react: WaitlistEmail({ email }),
      }),
      // Confirmation email to user
      resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "You're on the waitlist!",
        react: ConfirmationEmail(),
      }),
    ]);
    
    if (adminResponse.error) {
      console.error("Admin Email Error:", adminResponse.error);
      return NextResponse.json(
        { error: `Admin Email Failed: ${adminResponse.error.message}` },
        { status: 500 }
      );
    }
    
    if (userResponse.error) {
      console.error("User Email Error:", userResponse.error);
      return NextResponse.json(
        { error: `User Email Failed: ${userResponse.error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Successfully joined the waitlist! Please check your email.",
    });
  } catch (error) {
    console.error("Error joining waitlist:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
} 