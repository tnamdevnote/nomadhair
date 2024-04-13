import ConfirmationEmail from "@/emails/confirmationEmail";
import { cookies } from "next/headers";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const email = cookies().get("email")?.value as string;
    const username = cookies().get("displayName")?.value as string;

    const res = await resend.emails.send({
      // TODO Update sender email once domain is verified
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Appointment Confirmation",
      react: React.createElement(ConfirmationEmail, {
        username,
        date: payload.date,
        time: payload.time,
        location: payload.location,
        comment: payload.comment,
      }),
    });

    return Response.json(res);
  } catch (e) {
    return Response.json(e);
  }
}
