import { Card, CardContent, CardFooter } from "@/components/molecules/card";
import { Skeleton } from "@/components/atoms/skeleton";
import { Suspense } from "react";
import { UpcomingAppointments } from "../appointments/upcomingAppointments";
import { PastAppointments } from "../appointments/pastAppointments";

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
        </div>
      </section>
      <section aria-labelledby="past" className="mt-8 font-bold">
        <h2 id="past" className="py-3 text-base">
          Expired
        </h2>
        <div className="flex h-full flex-col gap-4">
          <Suspense fallback={<Loading />}>
            <PastAppointments />
          </Suspense>
        </div>
      </section>
    </>
  );
}
