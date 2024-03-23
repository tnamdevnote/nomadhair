import Button from "@/components/atoms/button";
import { Container } from "@/components/templates/container";
import { PlusIcon } from "lucide-react";
import React from "react";

function Page() {
  const isMobile = /Mob/i.test(navigator.userAgent);
  return (
    <div className="flex flex-col gap-16 py-16 md:pb-32">
      <Container className="flex justify-between">
        <h1 className="text-lg font-bold text-primary-100 lg:text-xl">
          My Appointments
        </h1>
        {/* Is there a better way to hide label on mobile? */}
        <Button
          icon={<PlusIcon />}
          className="fixed bottom-8 right-4 md:static"
        >
          New Appointment
        </Button>
      </Container>
      <Container className="min-h-dvh">My Appointments</Container>
    </div>
  );
}

export default Page;
