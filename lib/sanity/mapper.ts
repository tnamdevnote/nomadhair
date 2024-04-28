import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { FormSchema } from "../formSchema";
import { z } from "zod";

export const mapUser = (user: KindeUser) => {
  const result = {
    _id: user.id,
    _type: "customer",
    firstName: user.given_name,
    lastName: user.family_name,
    email: user.email,
    image: user.picture,
  };
  return result;
};

export const mapAppointment = (
  form: z.infer<typeof FormSchema>,
  userId: string,
) => {
  const { timeslotId, address1, address2, city, state, zipCode, comment } =
    form;
  const result = {
    _type: "appointment",
    customer: {
      _ref: userId,
      _type: "reference",
    },
    stylist: {
      _ref: "8786ca70-b352-4916-b105-56ed21f98230",
      _type: "reference",
    },
    timeslot: {
      _ref: timeslotId,
      _type: "reference",
    },
    address1,
    address2,
    city,
    state,
    comment,
    zipCode,
  };

  return result;
};
