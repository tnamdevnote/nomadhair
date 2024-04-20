import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { createClient, groq } from "next-sanity";
import { mapUser } from "./mapUser";
import { APPOINTMENT_QUERYResult } from "./sanity.types";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2024-04-18",
  // unless you have caching for your front end, `useCdn` should be `true` for most production environments
  useCdn: false,
  token: process.env.SANITY_API_TOKEN_APPOINTMENT,
});

export const addCustomer = async (user: KindeUser) => {
  const customer = mapUser(user);

  const res = await client.createIfNotExists(customer);
  return res;
};

export const getTimeSlot = async () => {
  const timeSlots = await client.fetch('*[_type == "timeSlot"]');
};

export const getAppointments = async (
  userId = "",
  type: "upcoming" | "past",
) => {
  const res = await client.fetch<APPOINTMENT_QUERYResult>(
    `*[_type=='appointment'
        && customer->_id == '${userId}'
        && dateTime(dateTime) ${type === "upcoming" ? ">" : "<"} dateTime(now())
      ]{
        "id": _id,
        dateTime,
        address1,
        address2,
        city,
        state,
        zipCode,
        comment,
        customer->{"id": _id, firstName, lastName},
        stylist->{"id": _id, firstName, lastName}
      }`,
  );

  return res;
};
