import { Button } from "@/shared/atoms/button";
import { Container } from "@/shared/templates/container";
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
    <div className="flex flex-col items-center">
      <Container className="relative w-full max-w-screen-md pt-32">
        <h1 className="text-lg font-bold text-primary-100">My Appointments</h1>
        <NewAppointmentDialog />
        <AppointmentList />
      </Container>
    </div>
  );
}
