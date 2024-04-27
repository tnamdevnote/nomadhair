import { z } from "zod";

export const FormSchema = z.object({
  date: z.date({
    required_error: "Required",
  }),
  time: z.string().min(1, "Required"),
  address1: z.string().min(1, "Required"),
  address2: z.string().optional(),
  city: z.string().max(30).min(2, "City must contain at least 2 characters"),
  state: z.string().length(2, "State must contain exactly 2 characters"),
  zip: z.string().length(5, "Zip code must be 5 digits long."),
  comment: z.string().max(50).optional(),
});
