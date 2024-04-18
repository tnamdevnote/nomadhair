import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { createClient } from "next-sanity";
import { mapUser } from "./mapUser";

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2024-04-18",
  // unless you have caching for your front end, `useCdn` should be `true` for most production environments
  useCdn: false,
  token: process.env.SANITY_API_TOKEN_APPOINTMENT,
});

//
export const addCustomer = async (user: KindeUser) => {
  const customer = mapUser(user);

  const res = await client.createIfNotExists(customer);
  return res;
};
