import { Button } from "@/components/atoms/button";
import Separator from "@/components/atoms/separator";
import { Card, CardContent, CardFooter } from "@/components/molecules/card";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/molecules/drawer";
import { Container } from "@/components/templates/container";
import { PlusIcon } from "lucide-react";
import React from "react";
import { UpcomingAppointment, PastAppointment } from "./components";
import NewAppointment from "./components/newAppointment/newAppointment";

function MyAppointments() {
  // const isMobile = /Mob/i.test(navigator.userAgent);

  return (
    <div className="relative flex flex-col gap-8 py-16 md:min-h-0">
      <Container className="flex justify-between">
        <h1 className="text-lg font-bold text-primary-100 lg:text-xl">
          My Appointments
        </h1>
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
          <UpcomingAppointment />
          <PastAppointment />
        </div>
        <div className="hidden md:sticky md:top-32 md:col-start-8 md:col-end-13 md:block">
          <NewAppointment />
        </div>
      </div>
    </div>
  );
}

export default MyAppointments;
