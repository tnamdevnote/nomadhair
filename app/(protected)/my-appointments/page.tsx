import { Button } from "@/components/atoms/button";
import { Container } from "@/components/templates/container";
import { PlusIcon } from "lucide-react";
import { AppointmentList } from "./components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { getAvailableDate } from "@/lib/sanity/client";
import NewAppointmentDialog from "./components/newAppointmentDialog/newAppointmentDialog";

export default async function MyAppointments() {
  const { isAuthenticated } = getKindeServerSession();
  const isSignedIn = await isAuthenticated();
  if (!isSignedIn) {
    redirect("/sign-in");
  }

  return (
    <div className="relative flex flex-col gap-8 py-8 md:min-h-0">
      <Container className="relative">
        <h1 className="text-lg font-medium text-primary-100 lg:text-lg">
          My Appointments
        </h1>
        <NewAppointmentDialog
          trigger={
            <Button
              className="hidden md:absolute md:right-32 md:top-0 md:flex"
              icon={<PlusIcon />}
            >
              New Appointment
            </Button>
          }
        />
        <AppointmentList />
      </Container>
    </div>
  );
}
