import ConfirmationEmail from "@/emails/confirmationEmail";
import { cookies } from "next/headers";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    const res = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["taekbeen93@gmail.com"],
      subject: "Hello world",
      // TODO: Requires updates along with EmailTemplate
      react: React.createElement(ConfirmationEmail, {
        username: cookies().get("displayName")?.value ?? "",
        time: payload.time,
        date: payload.date,
        location: payload.location,
        comment: payload.comment,
      }),
    });

    return Response.json(res);
  } catch (e) {
    return Response.json(e);
  }
}
