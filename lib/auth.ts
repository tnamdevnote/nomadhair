import {
  onAuthStateChanged as _onAuthStateChanged,
  User as FirebaseUser,
} from "firebase/auth";

import { auth } from "@/server/initFirebase";

export function onAuthStateChanged(cb: (user: FirebaseUser | null) => void) {
  return _onAuthStateChanged(auth, (user) => cb(user));
}
