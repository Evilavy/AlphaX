import { type NextRequest, NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';

interface WaitlistEntry {
  email: string;
  timestamp: string;
  date: string;
  time: string;
}

interface WaitlistData {
  emails: WaitlistEntry[];
}

export async function GET(req: NextRequest) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'waitlist.json');
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({
        emails: [],
        total: 0,
        message: "No waitlist data found"
      });
    }

    // Read and parse the file
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data: WaitlistData = JSON.parse(fileContent);

    // Sort by timestamp (newest first)
    const sortedEmails = data.emails.sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    return NextResponse.json({
      emails: sortedEmails,
      total: sortedEmails.length,
      message: `${sortedEmails.length} emails in waitlist`
    });

  } catch (error) {
    console.error("Error reading waitlist file:", error);
    return NextResponse.json(
      { error: "Failed to read waitlist data" },
      { status: 500 }
    );
  }
} 