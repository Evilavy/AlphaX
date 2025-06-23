import { type NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  try {
    const { data, error, count } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Supabase read error:", error);
      throw error;
    }

    return NextResponse.json({
      emails: data,
      total: count,
      message: `${count} emails in waitlist`
    });

  } catch (error) {
    console.error("Error reading waitlist from Supabase:", error);
    return NextResponse.json(
      { error: "Failed to read waitlist data from the database" },
      { status: 500 }
    );
  }
} 