import { onAuthStateChanged as _onAuthStateChanged, User } from "firebase/auth";

import { auth } from "@/server/initFirebase";

export function onAuthStateChanged(cb: (user: User | null) => void) {
  return _onAuthStateChanged(auth, (user) => cb(user));
}
