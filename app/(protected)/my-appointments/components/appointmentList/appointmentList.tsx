import { Card, CardContent, CardFooter } from "@/components/molecules/card";
import { Skeleton } from "@/components/atoms/skeleton";
import { Suspense } from "react";
import Appointments from "./appointments";

function LoadingSkeleton({ className }: { className?: string }) {
  return (
    <div className="flex w-full flex-col gap-8">
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
    </div>
  );
}

export function AppointmentList() {
  return (
    <section
      className="mt-8 flex justify-center md:mt-16"
      aria-labelledby="upcoming appointments"
    >
      <Suspense fallback={<LoadingSkeleton />}>
        <Appointments />
      </Suspense>
    </section>
  );
}
