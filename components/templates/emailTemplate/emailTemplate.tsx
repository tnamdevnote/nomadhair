interface EmailTemplateProps {
  firstName: string;
  appointmentDetails: { date: string; time: string; name: string };
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  appointmentDetails,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>{`Here is your appointment details: ${appointmentDetails.date} ${appointmentDetails.time} ${appointmentDetails.name}`}</p>
  </div>
);
