"use client";

import useSWR from "swr";

import { Card, CardContent, CardFooter } from "@/components/molecules/card";
import { Skeleton } from "@/components/atoms/skeleton";
import { Error, Fallback } from "@/components/organisms/fallback";
import { AppointmentCard } from "../appointmentCard/appointmentCard";
import { Appointment } from "@/server/model/appointment";
import Image from "next/image";
import { booking } from "@/public/illustrations";

async function getAppointments() {
  const res = await fetch(`/my-appointments/api`);
  const responseObj = await res.json();

  return responseObj;
}

const AppointmentPlaceHolder = () => {
  return (
    <div className="flex h-52 w-full flex-col items-center justify-center gap-4">
      <Image
        src={booking}
        width={150}
        alt="book appointment placeholder image"
      />
      <p className=" text-primary-100">There are no upcoming appointments.</p>
    </div>
  );
};

export const AppointmentList = () => {
  const { data, isLoading, error, mutate } = useSWR(
    "/my-appointments/api",
    getAppointments,
    {
      revalidateOnFocus: false,
    },
  );

  if (error) {
    return (
      <section
        className="flex h-full w-full items-center justify-center"
        aria-label="something went wrong"
      >
        <Fallback
          image={<Error className="h-2/3 w-2/3" />}
          title="Oops! Something went wrong."
          buttonText="Try Again"
          onButtonClick={() => mutate("/my-appointments/api")}
        />
      </section>
    );
  }

  return (
    <>
      <section aria-labelledby="upcoming">
        <h2 id="upcoming" className="py-3 text-base font-bold">
          Upcoming
        </h2>
        <div className="flex flex-col gap-4">
          {isLoading ? (
            <Card>
              <CardContent className="flex flex-col gap-4">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
              <CardFooter className="inline-flex justify-end gap-4">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-8 w-32" />
              </CardFooter>
            </Card>
          ) : (
            <>
              {data.upcomingAppointments.length === 0 ? (
                <AppointmentPlaceHolder />
              ) : (
                data.upcomingAppointments.map((appointment: Appointment) => (
                  <AppointmentCard
                    key={appointment.appointmentId}
                    type="upcoming"
                    appointment={appointment}
                  />
                ))
              )}
            </>
          )}
        </div>
      </section>
      <section aria-labelledby="past" className="mt-8 font-bold">
        <h2 id="past" className="py-3 text-base">
          Expired
        </h2>
        <div className="flex h-full flex-col gap-4">
          {isLoading ? (
            <Card className="bg-neutral-10">
              <CardContent className="flex flex-col gap-4">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
            </Card>
          ) : (
            <>
              {data.pastAppointments.map((appointment: Appointment) => (
                <AppointmentCard
                  key={appointment.appointmentId}
                  type="past"
                  appointment={appointment}
                />
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};
