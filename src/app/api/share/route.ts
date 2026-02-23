import { NextResponse } from "next/server";
import { generateShareToken } from "@/lib/auth";
import { getPropertyBySlug } from "@/lib/properties";

export async function POST(request: Request) {
  try {
    const { slug, expiryDays } = await request.json();

    if (!slug || !expiryDays) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const property = getPropertyBySlug(slug);
    if (!property) {
      return NextResponse.json({ error: "Property not found" }, { status: 404 });
    }

    const token = generateShareToken(slug, expiryDays);
    return NextResponse.json({ token, url: `/s/${token}` });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
