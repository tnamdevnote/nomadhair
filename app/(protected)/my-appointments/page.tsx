import { Button } from "@/components/atoms/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/molecules/drawer";
import { Container } from "@/components/templates/container";
import { PlusIcon } from "lucide-react";
import { AppointmentForm, AppointmentList } from "./components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { Calendar } from "@/components/atoms/calendar";
import AppointmentDateTimePicker from "./components/appointmentDateTimePicker/appointmentDateTimePicker";
import { getAvailableDate } from "@/lib/sanity/client";

export default async function MyAppointments() {
  const { isAuthenticated } = getKindeServerSession();
  const isSignedIn = await isAuthenticated();
  if (!isSignedIn) {
    redirect("/sign-in");
  }

  const availableDate = await getAvailableDate();

  return (
    <div className="relative flex flex-col gap-8 py-8 md:min-h-0">
      <Container className="flex justify-between">
        <h1 className="text-lg font-medium text-primary-100 lg:text-xl">
          My Appointments
        </h1>
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              aria-label="New Appointment"
              icon={<PlusIcon />}
              size="lg"
              className="fixed bottom-12 right-8 shadow-lg shadow-neutral-100/50 md:hidden"
            />
          </DrawerTrigger>
          <DrawerContent className="p-6">
            <DrawerHeader>
              <DrawerTitle>New Appointment</DrawerTitle>
            </DrawerHeader>
            <AppointmentForm />
          </DrawerContent>
        </Drawer>
      </Container>
      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-6 gap-10 p-4 md:grid-cols-12 md:px-32">
        <div className="col-span-6 md:max-h-[40rem] md:overflow-auto md:pb-4">
          <AppointmentList />
        </div>
        <div className="hidden md:sticky md:top-32 md:col-span-6 md:block">
          <section
            aria-labelledby="new-appointment"
            className="flex h-full flex-col"
          >
            <h2 id="new-appointment" className="py-3 text-base font-bold">
              New Appointment
            </h2>
            <div className="h-full w-full rounded-2xl bg-white p-6 shadow-md">
              <AppointmentDateTimePicker availableDates={availableDate} />
              {/* <AppointmentForm /> */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
