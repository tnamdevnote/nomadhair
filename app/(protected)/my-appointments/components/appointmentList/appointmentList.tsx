import useSWR from "swr";

import { Card, CardContent, CardFooter } from "@/components/molecules/card";
import { Skeleton } from "@/components/atoms/skeleton";
import { Error, Fallback } from "@/components/organisms/fallback";
import Image from "next/image";
import { booking } from "@/public/illustrations";
import { Button } from "@/components/atoms/button";
import { getAppointments } from "@/lib/sanity/client";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Suspense } from "react";
import { UpcomingAppointments } from "../appointments/upcomingAppointments";

// async function getAppointments() {
//   const res = await fetch(`/api/my-appointments`);
//   const responseObj = await res.json();

//   return responseObj;
// }

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

function Loading() {
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

export async function AppointmentList() {
  // if (error) {
  //   return (
  //     <section
  //       className="flex h-full w-full items-center justify-center"
  //       aria-label="something went wrong"
  //     >
  //       <Fallback
  //         className="h-full gap-4 lg:p-16"
  //         image={<Error className="h-2/3 w-2/3" />}
  //         title="Oops! Something went wrong."
  //       >
  //         <Button onClick={() => mutate("/api/my-appointments")}>
  //           Try again
  //         </Button>
  //       </Fallback>
  //     </section>
  //   );
  // }

  return (
    <>
      <section aria-labelledby="upcoming">
        <h2 id="upcoming" className="py-3 text-base font-bold">
          Upcoming
        </h2>
        <div className="flex flex-col gap-4">
          <Suspense fallback={<Loading />}>
            <UpcomingAppointments />
          </Suspense>
          {/* {isLoading ? (
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
          )} */}
        </div>
      </section>
      <section aria-labelledby="past" className="mt-8 font-bold">
        <h2 id="past" className="py-3 text-base">
          Expired
        </h2>
        <div className="flex h-full flex-col gap-4">
          {/* {isLoading ? (
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
          )} */}
        </div>
      </section>
    </>
  );
}
