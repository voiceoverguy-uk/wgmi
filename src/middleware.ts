import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = ["/portfolio", "/p/", "/admin/", "/api/share", "/api/properties"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = protectedPaths.some((path) =>
    pathname === path || pathname.startsWith(path)
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  const authCookie = request.cookies.get("wgmi_auth");
  if (authCookie?.value === "1") {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("redirect", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/portfolio/:path*", "/p/:path*", "/admin/:path*", "/api/share/:path*", "/api/properties/:path*"],
};
