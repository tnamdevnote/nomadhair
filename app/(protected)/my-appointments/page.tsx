import { Button } from "@/components/atoms/button";
import { Container } from "@/components/templates/container";
import { PlusIcon } from "lucide-react";
import { AppointmentList } from "./components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import NewAppointmentDialog from "./components/newAppointmentDialog/newAppointmentDialog";

export default async function MyAppointments() {
  const { isAuthenticated } = getKindeServerSession();
  const isSignedIn = await isAuthenticated();
  if (!isSignedIn) {
    redirect("/sign-in");
  }

  return (
    <div className="relative flex flex-col items-center gap-8 py-8 md:min-h-0">
      <Container className="relative">
        <h1 className="text-lg font-medium text-primary-100">
          My Appointments
        </h1>
        <NewAppointmentDialog />
        <AppointmentList />
      </Container>
    </div>
  );
}
