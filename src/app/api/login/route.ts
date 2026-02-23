import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    const correctPassword = process.env.WGMI_PORTFOLIO_PASSWORD;

    if (!correctPassword) {
      console.error("WGMI_PORTFOLIO_PASSWORD not set");
      return NextResponse.json({ error: "Server error" }, { status: 500 });
    }

    if (password === correctPassword) {
      const response = NextResponse.json({ success: true });
      response.cookies.set("wgmi_auth", "1", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
      return response;
    }

    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
