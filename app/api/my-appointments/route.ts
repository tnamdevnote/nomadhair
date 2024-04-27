import { createAppointment } from "@/lib/sanity/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw Response.json(null, { status: 403 });
  }

  const payload = await req.json();
  const res = await createAppointment(payload, user.id);

  return Response.json(res);
}
