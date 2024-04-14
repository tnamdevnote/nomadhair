import { database } from "@/server/initFirebase";
import { set, ref } from "firebase/database";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  const payload = await req.json();

  set(ref(database, "users/" + payload.guid), {
    displayName: payload.displayName,
    email: payload.email,
    userType: payload.userType,
  });

  cookies().set("id", payload.guid, { secure: true, httpOnly: true });
  cookies().set("email", payload.email, { secure: true, httpOnly: true });
  cookies().set("displayName", payload.displayName, {
    secure: true,
    httpOnly: true,
  });
  cookies().set("photoURL", payload.photoURL, {
    secure: true,
    httpOnly: true,
  });
  const response = new NextResponse(null, { status: 200 });
  return response;
}
