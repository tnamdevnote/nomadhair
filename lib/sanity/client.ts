import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { createClient } from "next-sanity";
import { mapUser, mapAppointment } from "./mapper";
import {
  APPOINTMENT_QUERYResult,
  AVAILABLE_DATE_QUERYResult,
} from "./sanity.types";
import { FormSchema } from "../formSchema";
import { z } from "zod";

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

export const getAvailableDate = async () => {
  const dates = await client.fetch<AVAILABLE_DATE_QUERYResult>(
    `*[_type=='timeslot'
     && !(_id in *[_type=='appointment'].timeslot._ref)
     && date >= now()
    ]{
      "id": _id,
      date,
    }`,
    {},
    { cache: "no-store" },
  );

  const distinctDates: { [key in string]: number } = {};
  dates.forEach((d) => {
    if (!distinctDates[d.date]) {
      distinctDates[d.date] = 1;
    }
  });
  return Object.keys(distinctDates);
};

export const getAvailableTimeSlots = async (date: string) => {
  const timeSlots = await client.fetch(
    `*[_type=='timeslot'
      && !(_id in *[_type=='appointment'].timeslot._ref)
      && date == '${date}' 
      && dateTime(time) >= dateTime(now())
      ]{
        "id": _id,
        date,
        time,
      }`,
    {},
    { cache: "no-store" },
  );

  return timeSlots;
};

export const isTimeSlotReserved = async (timeslotId: string) => {
  const isReserved = await client.fetch(
    `count(*[_type=='appointment' 
        && references('${timeslotId}')
    ]) > 0`,
    {},
    { cache: "no-store" },
  );

  return isReserved;
};

export const getAppointments = async (userId = "") => {
  const res = await client.fetch<APPOINTMENT_QUERYResult>(
    `*[_type=='appointment'
        && customer->_id == '${userId}'
        && dateTime(timeslot->time) >= dateTime(now())
      ]{
        "id":_id,
        "timeslotId":timeslot->_id,
        "date":timeslot->date,
        "time":timeslot->time,
        address1,
        address2,
        city,
        state,
        zipCode,
        comment,
        customer->{"id": _id, firstName, lastName},
        stylist->{"id": _id, firstName, lastName}
      }
    `,
    {},
    // this will let next js trigger revalidation when revalidate function is called
    { next: { tags: ["appointments"] } },
  );

  return res;
};

export const createAppointment = async (
  form: z.infer<typeof FormSchema>,
  userId: string,
) => {
  const appointment = mapAppointment(form, userId);
  const res = await client.create(appointment);

  return res;
};

export const updateAppointment = async (
  form: z.infer<typeof FormSchema>,
  userId: string,
) => {
  const appointment = mapAppointment(form, userId);
  const res = await client
    .patch("YamW7iUfTGgX1JkiOPz5iP")
    .set(appointment)
    .commit();

  return res;
};

export const deleteAppointment = async (appointmentId: string) => {
  const res = await client.delete(appointmentId);

  return res;
};
