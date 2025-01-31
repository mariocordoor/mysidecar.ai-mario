import { User } from "@/lib/types";
import React from "react";

interface UserDetailsCardProps {
  user: User | null;
  className?: string;
}

export const UserDetailsCard: React.FC<UserDetailsCardProps> = ({
  user,
  className = "",
}) => {
  return user ? (
    <div className={`${className} bg-grey-100 p-6 rounded-lg shadow-md`}>
      <h2 className="text-xl font-semibold mb-4">User Details</h2>
      <div className="space-y-2">
        {Object.entries(user ?? {}).map(([key, value]) => (
          <p key={key}>
            <span className="font-bold capitalize">{key}:</span> {value}
          </p>
        ))}
      </div>
    </div>
  ) : (
    <div>No user data available.</div>
  );
};
