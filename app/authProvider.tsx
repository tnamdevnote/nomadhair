"use client";

import {
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
  useCallback,
} from "react";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";

import { onAuthStateChanged } from "@/lib/auth";
import { auth } from "@/server/initFirebase";

export interface AuthContext {
  user: User | null;
  signIn: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // The initialUser comes from the server via a server component
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const signIn = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    // onAuthStateChanged listens for updates in user's auth state.
    const unsubscribe = onAuthStateChanged(setUser);

    return () => unsubscribe();
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
