"use client";
import { createContext, ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";
import { User } from "../types";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, name: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
