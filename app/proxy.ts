import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);
  // Expose the pathname to server components via headers()
  requestHeaders.set("x-pathname", req.nextUrl.pathname);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

// Limit where middleware runs (skip static assets/images)
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)",
  ],
};
