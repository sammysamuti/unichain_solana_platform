"use client";
import type React from "react";
import { AdminSidebar } from "@/components/admin-components/admin-sidebar";
import { AdminTopNav } from "@/components/admin-components/admin-top-nav";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    // Check if user is admin
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      router.push("/login");
    }
  }, [router]);

  return (
    <main className="flex-1 overflow-auto">
      <div className="mx-auto w-full max-w-7xl p-4 md:p-6 lg:p-8">
        {children}
      </div>
    </main>
  );
}
