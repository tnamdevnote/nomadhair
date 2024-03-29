import { ref, set } from "firebase/database";
import { database } from "../initFirebase";
import { v4 } from "uuid";
import { User } from "../model/user";

export async function createUser(user: User) {
    console.log("CreateUser function is called...");
    const guid = v4();
    set(ref(database, 'users/' + guid), {
      displayName: user.displayName,
      email: user.email,
      userType : user.userType
    });
    console.log("CreateUser function is successfully called");
  }
 