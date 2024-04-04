import { database } from "@/server/initFirebase";
import { set, ref } from "firebase/database";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
    const payload = await req.json();
    set(ref(database, 'users/' + payload.guid), {
        displayName: payload.displayName,
        email: payload.email,
        userType : payload.userType
    });
    const response = new NextResponse(null, {status: 200})
    return response;
}