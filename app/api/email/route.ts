import ConfirmationEmail from "@/emails/confirmationEmail";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || user === null || !user.email) {
      throw new Error("Something went wrong with authentication " + user);
    }

    const payload = await req.json();
    const res = await resend.emails.send({
      // TODO Update sender email once domain is verified
      from: "NomadHair <noreply@nomadhair.co>",
      to: [user.email, "taekbeen93@gmail.com"],
      subject: "Appointment Confirmation",
      react: React.createElement(ConfirmationEmail, {
        username: user.given_name + " " + user.family_name,
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
