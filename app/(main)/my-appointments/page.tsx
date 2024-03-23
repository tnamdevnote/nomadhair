import Button from "@/components/atoms/button";
import { Card, CardContent, CardFooter } from "@/components/molecules/card";
import { Container, SplitContainer } from "@/components/templates/container";
import { CalendarIcon, ClockIcon, EditIcon, PlusIcon } from "lucide-react";
import React from "react";

function MyAppointments() {
  const isMobile = /Mob/i.test(navigator.userAgent);

  return (
    <div className="flex flex-col gap-8 py-16 md:pb-32">
      <Container className="flex justify-between">
        <h1 className="text-lg font-bold text-primary-100 lg:text-xl">
          My Appointments
        </h1>
        {/* Is there a better way to hide label on mobile? */}
        <Button
          icon={<PlusIcon />}
          className="fixed bottom-8 right-4 md:hidden"
        >
          New Appointment
        </Button>
      </Container>
      <SplitContainer className="min-h-dvh">
        <SplitContainer.Left className="w-full">
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
                <Button variant="ghost" size="sm" className="flex-1">
                  Cancel
                </Button>
                <Button icon={<EditIcon />} size="sm" className="flex-1">
                  Edit
                </Button>
              </CardFooter>
            </Card>
          </section>
          <section aria-labelledby="past" className="mt-8 font-bold">
            <h2 id="past" className="py-3 text-base">
              Past
            </h2>
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
          </section>
        </SplitContainer.Left>
        <SplitContainer.Right className="hidden w-full">
          Right
        </SplitContainer.Right>
      </SplitContainer>
    </div>
  );
}

export default MyAppointments;
