"use client";

import {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
  useCallback,
} from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  User as FirebaseUser,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";

import { onAuthStateChanged } from "@/lib/auth";
import { auth } from "@/server/initFirebase";
import { mapUser } from "@/server/mapper/userMapper";

export interface AuthContext {
  /** Accepts firebase User interface */
  user: FirebaseUser | null;
  signIn: (providerName: "Google" | "Facebook") => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContext | null>(null);

/**
 * A context provider to manage authentication information on the client side.
 */
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // The initialUser comes from the server via a server component
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    // onAuthStateChanged listens for updates in user's auth state.
    const unsubscribe = onAuthStateChanged(setUser);

    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signIn = useCallback(async (providerName: "Google" | "Facebook") => {
    let credential, provider;

    try {
      switch (providerName) {
        case "Google":
          provider = new GoogleAuthProvider();
          provider.setCustomParameters({ prompt: "select_account" });
          credential = await signInWithPopup(auth, provider);
          break;
        case "Facebook":
          provider = new FacebookAuthProvider();
          provider.setCustomParameters({ prompt: "select_account" });
          credential = await signInWithPopup(auth, provider);
          break;
      }
      const user = mapUser(credential, 1);

      await fetch("/api/sign-in/", {
        method: "PATCH",
        body: JSON.stringify({
          ...user,
          guid: credential.user.uid,
        }),
      });
    } catch (error) {
      console.error(`Error signing in with ${providerName}.`, error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signOut = useCallback(async () => {
    try {
      auth.signOut();
      const res = await fetch("/api/sign-out", {
        method: "DELETE",
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.error("Error signing out.", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const memoizedProviderValue = useMemo(
    () => ({
      user,
      signIn,
      signOut,
    }),
    [user, signIn, signOut],
  );

  return (
    <AuthContext.Provider value={memoizedProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }

  return context;
};
