import { Badge } from "@/components/atoms/badge";
import { TimeslotSchema } from "@/lib/formSchema";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import useSWR from "swr";
import { z } from "zod";

interface AppointmentTimeslotsProps {
  currentDate: Date | undefined;
}

function AppointmentTimeslots({ currentDate }: AppointmentTimeslotsProps) {
  const [selected, setSelected] = useState<string | null>(null);
  // TODO: Find ways to type returned data from SWR
  const { data, isLoading, error } = useSWR(
    currentDate ? `${currentDate}` : null,
    async () => {
      const res = await fetch(`api/timeslots/${currentDate}`);
      return res.json();
    },
  );
  const { setValue, register } = useFormContext();

  const handleSelect = (
    e: React.SyntheticEvent<HTMLDivElement>,
    timeslot: z.infer<typeof TimeslotSchema>,
  ) => {
    setValue("timeslot", timeslot);
    if (selected !== timeslot.id) {
      return setSelected(timeslot.id);
    }
    setSelected(null);
  };

  if (isLoading) {
    return <p className="m-auto">Loading...</p>;
  }

  if (error) {
    return <p className="m-auto">Something went wrong. Try again.</p>;
  }

  return (
    <div className="flex gap-4 p-3">
      {data && data.length !== 0 ? (
        data.map((timeslot: z.infer<typeof TimeslotSchema>) => (
          <Badge
            className="shrink flex-grow-0"
            key={timeslot.id}
            selected={selected === timeslot.id}
            label={timeslot.time}
            onClick={(e) => handleSelect(e, timeslot)}
            {...register("timeslot")}
          />
        ))
      ) : (
        <p>There are no available appointments.</p>
      )}
    </div>
  );
}

export default AppointmentTimeslots;
