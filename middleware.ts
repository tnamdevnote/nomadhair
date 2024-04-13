import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("id")?.value;
  console.log(cookies().get("id"));
  // if (!currentUser && request.nextUrl.pathname.startsWith("/my-appointments")) {
  //   return NextResponse.redirect(new URL("/sign-in", request.url));
  // }
}

// only run middleware on matching path
export const config = {
  matcher: ["/my-appointments"],
};
