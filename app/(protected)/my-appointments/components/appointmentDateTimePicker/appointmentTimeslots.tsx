import { Badge } from "@/components/atoms/badge";
import { FormControl } from "@/components/molecules/form";
import { TimeslotSchema } from "@/lib/formSchema";
import { formatToDisplayTime } from "@/lib/utils";
import { format } from "date-fns";
import { useState } from "react";
import { useController } from "react-hook-form";
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

  const { field } = useController({ name: "timeslot" });

  const handleSelect = (
    e: React.SyntheticEvent<HTMLDivElement>,
    timeslot: z.infer<typeof TimeslotSchema>,
  ) => {
    if (selected === timeslot.id && !!field.value.id) {
      field.onChange({ id: "", date: "", time: "" });
      return setSelected(null);
    }
    field.onChange(timeslot);
    setSelected(timeslot.id);
  };

  if (isLoading) {
    return <p className="m-auto">Loading...</p>;
  }

  if (error) {
    return <p className="m-auto">Something went wrong. Try again.</p>;
  }

  return (
    <FormControl>
      <div className="flex gap-4 p-3">
        {data && data.length !== 0 ? (
          data.map((timeslot: z.infer<typeof TimeslotSchema>) => (
            <Badge
              className="shrink flex-grow-0"
              key={timeslot.id}
              selected={selected === timeslot.id}
              label={formatToDisplayTime(timeslot.time)}
              onClick={(e) => handleSelect(e, timeslot)}
            />
          ))
        ) : (
          <p>There are no available appointments.</p>
        )}
      </div>
    </FormControl>
  );
}

export default AppointmentTimeslots;
