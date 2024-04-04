import { EmailTemplate } from "@/components/templates/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.json();

    const res = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["taekbeen93@gmail.com"],
      subject: "Hello world",
      text: "",
      // TODO: Requires updates along with EmailTemplate
      react: EmailTemplate({
        firstName: "Taek",
        appointmentDetails: formData,
      }),
    });

    return Response.json(res);
  } catch (e) {
    return Response.json(e);
  }
}
