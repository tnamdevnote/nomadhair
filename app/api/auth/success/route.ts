export const dynamic = "force-dynamic";

import { addCustomer } from "@/lib/sanity/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  if (!user || user === null || !user.id) {
    throw new Error("Something went wrong with authentication" + user);
  }
  // Add customer to Sanity upon sign in
  await addCustomer(user);

  // TODO: update redirect path in production
  return NextResponse.redirect(`${process.env.BASE_URL}`);
}
