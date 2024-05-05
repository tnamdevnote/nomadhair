import {
  createAppointment,
  isTimeSlotReserved,
  updateAppointment,
} from "@/lib/sanity/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) {
    throw new Error("Something went wrong with authentication " + user);
  }

  const payload = await req.json();

  const isReserved = await isTimeSlotReserved(payload.timeslot.id);

  if (isReserved) {
    return Response.json(isReserved, {
      status: 409,
      statusText: "This timeslot has already been taken.",
    });
  }

  const res = await createAppointment(payload, user.id);

  revalidateTag("appointments");
  return Response.json(res);
}

export async function PATCH(req: NextRequest) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user === null || !user.id) {
    throw new Error("Something went wrong with authentication " + user);
  }

  const payload = await req.json();
  const res = await updateAppointment(payload, user.id);

  return Response.json(res);
}
