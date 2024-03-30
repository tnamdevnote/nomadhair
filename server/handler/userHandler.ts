import { ref, set } from "firebase/database";
import { database } from "../initFirebase";
import { v4 } from "uuid";
import { User } from "../model/user";

export function createUser(user: User, guid: string) {
    console.log("CreateUser function is called...");
    set(ref(database, 'users/' + guid), {
      displayName: user.displayName,
      email: user.email,
      userType : user.userType
    });
    console.log("CreateUser function is successfully called");
  }
 