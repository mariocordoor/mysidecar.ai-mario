"use client";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { LoginForm } from "./_components/LoginForm";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/lib/hooks/useAuth";

export default function LoginPage() {
  const { user, login, isLoading, logout } = useAuth();
  console.log(useAuth());

  return !isLoading ? (
    <div className="max-w-[400px] w-[400px] min-h-[400px] py-14 px-10 rounded-xl gap-6 bg-gray-100 shadow-md items-center justify-center flex mx-auto mt-auto">
      {user ? (
        <div className="flex items-center flex-col gap-4">
          <div className="flex text-2xl font-bold flex-col items-center gap-2">
            Welcome, {user.name}
            <span className="text-gray-500 text-sm">{user.email}</span>
          </div>
          <Link href="/dashboard" className="text-primary font-bold underline">
            Go to Dashboard
          </Link>
          <Button
            variant="primary"
            value="Log Out"
            onClick={logout}
            className="w-full"
          />
        </div>
      ) : (
        <div className="w-full flex flex-col gap-y-8">
          <Logo className="max-w-[200px]" />
          <div className="text-2xl font-bold">Login to your account</div>
          <LoginForm handleSubmit={login} />
        </div>
      )}
    </div>
  ) : null;
}
