import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

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
