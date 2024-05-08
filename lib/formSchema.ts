import { z } from "zod";

export const TimeslotSchema = z.object({
  id: z.string(),
  date: z.string(),
  time: z.string().min(1, "Please select appoitment time."),
});

export const FormSchema = z.object({
  timeslot: TimeslotSchema.refine((val) => val.time !== "", {
    message: "Please pick a time.",
  }),
  address1: z.string().min(1, "Invalid address."),
  address2: z.string().optional(),
  city: z.string().max(30).min(2, "Minimum length for city is 2."),
  state: z.string().length(2, "Invalid state code."),
  zipCode: z.string().length(5, "Invalid zip code."),
  comment: z.string().max(50).optional(),
});
