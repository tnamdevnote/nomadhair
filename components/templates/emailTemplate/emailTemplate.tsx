import Logo from "@/components/atoms/logo";

interface EmailTemplateProps {
  firstName: string;
  appointmentDetails: { date: string; time: string; note: string };
}

/** This is a temporary email template
 * TODO: use {@link https://react.email/docs/introduction | React Email} to create accessible email template
 */
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  appointmentDetails,
}) => (
  <div className="flex w-full flex-col items-center gap-2">
    <Logo />
    <h1 className="text-primary-100">Welcome, {firstName}!</h1>
    <p>{`Here is your appointment details: ${appointmentDetails.date} ${appointmentDetails.time} ${appointmentDetails.note}`}</p>
  </div>
);
