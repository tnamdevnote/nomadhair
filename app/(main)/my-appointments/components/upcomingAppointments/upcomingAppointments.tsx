"use client";

import React from "react";
import { AppointmentCard } from "../appointmentCard/appointmentCard";
import { Appointment } from "@/server/model/appointment";
import useSWR from "swr";
import { Card, CardContent, CardFooter } from "@/components/molecules/card";
import { Skeleton } from "@/components/atoms/skeleton";
import { Button } from "@/components/atoms/button";

async function getUpcomingAppointments() {
  const res = await fetch(`/my-appointments/api`);
  if (!res.ok) {
    throw new Error("Failed to fetch upcoming appointments");
  }
  const responseObj = await res.json();

  return responseObj;
}

export function UpcomingAppointments() {
  const { data, isLoading, error, mutate } = useSWR(
    "/my-appointments/api",
    getUpcomingAppointments,
    {
      revalidateOnFocus: false,
    },
  );

  if (error) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Button size="sm" onClick={() => mutate("/my-appointments/api")}>
          Try Again
        </Button>
      </div>
    );
  }

  if (isLoading) {
    return (
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
    );
  }

  return (
    <>
      {data.upcomingAppointments.map((appointment: Appointment) => {
        return (
          <AppointmentCard
            key={appointment.appointmentId}
            appointment={appointment}
          />
        );
      })}
    </>
  );
}
