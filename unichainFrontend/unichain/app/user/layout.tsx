"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    // Checks if user is logged in
    const userId = localStorage.getItem("userId");
    if (!userId) {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-background">
      <main>{children}</main>
    </div>
  );
}
