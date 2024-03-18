import { ref, set } from "firebase/database";
import { database } from "../initFirebase";
import { v4 } from "uuid";
import { UserObject } from "../model/userObject";

export function createUser(user: UserObject) {
    console.log("CreateUser function is called...");
    const guid = v4();
    set(ref(database, 'users/' + guid), {
      token: user.token,
      displayName: user.displayName,
      email: user.email,
      userType : user.userType
    });
    console.log("CreateUser function is successfully called");
  }
 