import Button from "@/components/atoms/button";
import Separator from "@/components/atoms/separator";
import { Card, CardContent, CardFooter } from "@/components/molecules/card";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/molecules/drawer";
import { Container } from "@/components/templates/container";
import { CalendarIcon, ClockIcon, EditIcon, PlusIcon } from "lucide-react";
import React from "react";

function MyAppointments() {
  const isMobile = /Mob/i.test(navigator.userAgent);

  return (
    <div className="relative flex flex-col gap-8 py-16 md:min-h-0">
      <Container className="flex justify-between">
        <h1 className="text-lg font-bold text-primary-100 lg:text-xl">
          My Appointments
        </h1>
        {/* Is there a better way to hide label on mobile? */}
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              icon={<PlusIcon />}
              size="lg"
              className="fixed bottom-12 right-8 bg-primary-90 md:hidden"
            />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>This is a Drawer</DrawerHeader>
          </DrawerContent>
        </Drawer>
      </Container>
      <div className="mx-auto grid max-w-screen-2xl grid-cols-6 p-4 md:grid-cols-12 md:p-16">
        <div className="col-span-6 md:max-h-[40rem] md:overflow-auto md:pb-4">
          <section aria-labelledby="upcoming">
            <h2 id="upcoming" className="py-3 text-base font-bold">
              Upcoming
            </h2>
            <Card>
              <CardContent className="flex flex-col gap-4">
                <p className="inline-flex gap-2 text-base font-bold">
                  <CalendarIcon />
                  Monday, 12 June
                </p>
                <p className="inline-flex gap-2 text-base font-bold">
                  <ClockIcon />
                  12:30PM
                </p>
                <p className="text-sm">3201 Burton Street SE</p>
                <p className="line-clamp-2 overflow-hidden text-ellipsis text-wrap text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent tellus leo, vestibulum a ipsum sed, suscipit sodales
                  ex.{" "}
                </p>
              </CardContent>
              <CardFooter className="inline-flex justify-end gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1 md:w-32 md:flex-none"
                >
                  Cancel
                </Button>
                <Button
                  icon={<EditIcon />}
                  variant="ghost"
                  size="sm"
                  className="flex-1 md:w-32 md:flex-none"
                >
                  Edit
                </Button>
              </CardFooter>
            </Card>
          </section>
          <section aria-labelledby="past" className="mt-8 font-bold">
            <h2 id="past" className="py-3 text-base">
              Past
            </h2>
            <div className="flex h-full flex-col gap-4">
              <Card className="bg-neutral-10">
                <CardContent className="flex flex-col gap-2">
                  <p className="inline-flex gap-2 text-base font-bold">
                    <CalendarIcon />
                    Monday, 12 June
                  </p>
                  <p className="inline-flex gap-2 text-base font-bold">
                    <ClockIcon />
                    12:30PM
                  </p>
                  <p className="text-sm">3201 Burton Street SE</p>
                </CardContent>
              </Card>
              <Card className="bg-neutral-10">
                <CardContent className="flex flex-col gap-2">
                  <p className="inline-flex gap-2 text-base font-bold">
                    <CalendarIcon />
                    Monday, 12 June
                  </p>
                  <p className="inline-flex gap-2 text-base font-bold">
                    <ClockIcon />
                    12:30PM
                  </p>
                  <p className="text-sm">3201 Burton Street SE</p>
                </CardContent>
              </Card>
              <Card className="bg-neutral-10">
                <CardContent className="flex flex-col gap-2">
                  <p className="inline-flex gap-2 text-base font-bold">
                    <CalendarIcon />
                    Monday, 12 June
                  </p>
                  <p className="inline-flex gap-2 text-base font-bold">
                    <ClockIcon />
                    12:30PM
                  </p>
                  <p className="text-sm">3201 Burton Street SE</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
        <Separator orientation="vertical" className="hidden h-auto md:block" />
        <div className="hidden md:sticky md:top-32 md:col-span-5 md:block">
          <section
            aria-labelledby="new-appointment"
            className="flex h-full flex-col"
          >
            <h2 id="new-appointment" className="py-3 text-base font-bold">
              New Appointment
            </h2>
            <div className="h-full w-full rounded-2xl bg-white shadow-md">
              {/* form goes here */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MyAppointments;
