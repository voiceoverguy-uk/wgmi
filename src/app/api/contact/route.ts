import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, reason, message } = body;

    // TODO: Connect to email provider (e.g. SendGrid, Resend, etc.)
    // For now, log the contact form submission to the console
    console.log("=== New Contact Form Submission ===");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Reason:", reason);
    console.log("Message:", message);
    console.log("===================================");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
