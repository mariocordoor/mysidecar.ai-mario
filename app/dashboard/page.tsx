"use client";
import React from "react";
import { redirect } from "next/navigation";
import { UserDetailsCard } from "@/components/ui/UserDetailsCard";
import { useAuth } from "@/lib/hooks/useAuth";

export default function DashboardPage() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex flex-col gap-4 p-10 items-start">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <UserDetailsCard user={user} className="border-2 border-primary" />
    </div>
  );
}
