import { Badge } from "@/components/atoms/badge";
import { useFormField } from "@/components/molecules/form";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import useSWR from "swr";

interface AppointmentTimeslotsProps {
  currentDate: Date | undefined;
}

function AppointmentTimeslots({ currentDate }: AppointmentTimeslotsProps) {
  const [selected, setSelected] = useState<string | null>(null);
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
    timeslotId: string,
  ) => {
    setValue("timeslotId", timeslotId);
    if (selected !== timeslotId) {
      return setSelected(timeslotId);
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
    <>
      {data && data.length !== 0 ? (
        data.map(({ id, start }: typeof data) => (
          <Badge
            className="shrink flex-grow-0"
            key={id}
            selected={selected === id}
            label={start}
            onClick={(e) => handleSelect(e, id)}
            {...register("timeslotId")}
          />
        ))
      ) : (
        <p className="m-auto">There are no available appointments.</p>
      )}
    </>
  );
}

export default AppointmentTimeslots;
