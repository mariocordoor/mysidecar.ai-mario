import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "@/lib/contexts/authContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MySidecar.ai",
  description: "Your platform for GTM strategies and positioning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const calculateCurrentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <main className="min-h-screen flex flex-col">
          <UserProvider>{children}</UserProvider>
          <footer className="flex items-center justify-center gap-x-1 pb-4 flex-wrap mt-auto">
            Copyright © {calculateCurrentYear()}{" "}
            <Link
              href="https://www.mysidecar.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold"
            >
              {" "}
              MySidecar.ai.{" "}
            </Link>{" "}
            All rights reserved.
          </footer>
        </main>
        <ToastContainer />
      </body>
    </html>
  );
}
