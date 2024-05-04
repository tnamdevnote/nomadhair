import { z } from "zod";

export const TimeslotSchema = z.object({
  id: z.string(),
  date: z.string(),
  time: z.string(),
});

export const FormSchema = z.object({
  timeslot: TimeslotSchema.required(),
  address1: z.string().min(1, "Required"),
  address2: z.string().optional(),
  city: z.string().max(30).min(2, "City must contain at least 2 characters"),
  state: z.string().length(2, "State must contain exactly 2 characters"),
  zipCode: z.string().length(5, "Zip code must be 5 digits long."),
  comment: z.string().max(50).optional(),
});
