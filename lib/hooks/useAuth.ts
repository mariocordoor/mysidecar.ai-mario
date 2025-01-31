"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { User } from "../types";
import { toast } from "react-toastify";

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Fetch user data from localStorage
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  // Login functionality
  const login = useCallback(async (email: string, name: string) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      if (!response.ok) {
        toast.error(
          response.status === 404 ? "User not found" : "Login failed",
          {
            autoClose: 3000,
          },
        );
        return;
      }

      const userData: User = await response.json();

      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData)); // Save user to localStorage

      toast.success("Login successful", { autoClose: 3000 });
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login", { autoClose: 3000 });
    }
  }, []);

  // Logout functionality
  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("user"); // Remove user from localStorage
    router.push("/login");
  }, [router]);

  return {
    user,
    isLoading,
    login,
    logout,
  };
};
