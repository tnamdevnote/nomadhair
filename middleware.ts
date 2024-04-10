import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/my-appointments") &&
    !cookies().get("id")?.value
  ) {
    console.log(cookies().get("id"));
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
}

// only run middleware on matching path
export const config = {
  matcher: ["/my-appointments"],
};
