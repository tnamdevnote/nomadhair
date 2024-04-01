import { EmailTemplate } from "@/components/templates/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const res = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["gyuhyeonggyu@gmail.com"],
      subject: "Hello world",
      text: "",
      react: EmailTemplate({
        firstName: "HyeongGyu",
        appointmentDetails: formData,
      }),
    });

    return Response.json(res);
  } catch (e) {
    return Response.json(e);
  }
}
