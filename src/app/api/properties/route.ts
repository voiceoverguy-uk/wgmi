import { NextResponse } from "next/server";
import { getAllProperties } from "@/lib/properties";

export async function GET() {
  const properties = getAllProperties().map((p) => ({
    slug: p.slug,
    displayTitle: p.displayTitle,
  }));
  return NextResponse.json(properties);
}
