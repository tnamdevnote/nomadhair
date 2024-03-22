import Button from "@/components/atoms/button";
import { Container } from "@/components/templates/container";
import { PlusIcon } from "lucide-react";
import React from "react";

function Page() {
  return (
    <div className="flex flex-col gap-16 py-16 md:pb-32">
      <Container className="flex justify-between">
        <h1 className="text-lg font-bold text-primary-100 lg:text-xl">
          My Appointments
        </h1>
        <Button icon={<PlusIcon />} className="hidden md:inline-flex">
          New Appointment
        </Button>
      </Container>
      <Container>My Appointments</Container>
    </div>
  );
}

export default Page;
