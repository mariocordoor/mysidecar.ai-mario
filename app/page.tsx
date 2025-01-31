"use client";
import Image from "next/image";
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";
import { useAuth } from "@/lib/hooks/useAuth";
import { redirect } from "next/navigation";

export default function Home() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (!!user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex max-w-[1200px] gap-x-10 mx-auto mt-auto items-center">
      <div className="w-1/2">
        <Image
          src="/mysidecar_home_banner.png"
          alt="Welcome to MySidecar.ai"
          width={700}
          height={400}
          loading="lazy"
        />
      </div>
      <div className="w-1/2 flex items-start flex-col gap-y-4">
        <Logo className="mb-4" />
        <h1 className="text-3xl font-bold">Build Your Winning Strategy Now</h1>
        <p>
          Create tailored GTM strategies and positioning in minutes—no waiting,
          no guesswork.
        </p>
        <Link
          href="/login"
          className="text-white font-bold py-2 px-4 rounded bg-primary"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
