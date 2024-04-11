import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// This handler should receive SESSION ID once we implement server-side authentication.
export async function DELETE() {
  cookies().delete("id");
  cookies().delete("email");
  cookies().delete("displayName");
  cookies().delete("photoURL");
  return NextResponse.json(
    { success: true, data: "Signed out successfully!" },
    { status: 200 },
  );
}
