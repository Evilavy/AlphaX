import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import WaitlistEmail from "@/emails/waitlist-email";
import ConfirmationEmail from "@/emails/confirmation-email";
import fs from 'fs';
import path from 'path';

const resend = new Resend(process.env.EMAIL_SERVER_PASSWORD);

interface WaitlistEntry {
  email: string;
  timestamp: string;
  date: string;
  time: string;
}

interface WaitlistData {
  emails: WaitlistEntry[];
}

// Function to save email to JSON file
async function saveEmailToFile(email: string) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'waitlist.json');
    
    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Read existing data or create new structure
    let data: WaitlistData = { emails: [] };
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      data = JSON.parse(fileContent);
    }

    // Check if email already exists
    const emailExists = data.emails.some((entry: WaitlistEntry) => entry.email === email);
    if (emailExists) {
      return { alreadyExists: true };
    }

    // Add new email with timestamp
    data.emails.push({
      email: email,
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString('fr-FR'),
      time: new Date().toLocaleTimeString('fr-FR')
    });

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return { success: true };
  } catch (error) {
    console.error('Error saving email to file:', error);
    return { error: 'Failed to save email' };
  }
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Save email to JSON file first
    const saveResult = await saveEmailToFile(email);
    
    if (saveResult.alreadyExists) {
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 400 }
      );
    }

    if (saveResult.error) {
      return NextResponse.json(
        { error: saveResult.error },
        { status: 500 }
      );
    }

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