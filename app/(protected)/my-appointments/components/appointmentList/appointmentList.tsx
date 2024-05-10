import { Card, CardContent, CardFooter } from "@/components/molecules/card";
import { Skeleton } from "@/components/atoms/skeleton";
import { Suspense } from "react";
import UpcomingAppointments from "./upcomingAppointments";

function LoadingSkeleton({ className }: { className?: string }) {
  return (
    <Card className={className}>
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

export function AppointmentList() {
  return (
    <section className="mt-8 md:mt-16" aria-labelledby="upcoming">
      <Suspense fallback={<LoadingSkeleton />}>
        <UpcomingAppointments />
      </Suspense>
    </section>
  );
}
