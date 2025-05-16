"use client"; 

import type React from "react";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { Inter } from "next/font/google";
import Loading from "./loading";
import { ClientSidebar } from "@/components/client-wrappers/sidebar-wrapper";
import { ClientTopNav } from "@/components/client-wrappers/topnav-wrapper";
import { AdminSidebar } from "@/components/admin-components/admin-sidebar";
import { AdminTopNav } from "@/components/admin-components/admin-top-nav";
import { RouteTemplate } from "@/components/route-template";
import { FloatingChatButton } from "@/components/FloatingChatButton";
import { preloadComponents } from "./preload";
import "./globals.css";
import { usePathname } from "next/navigation";


const inter = Inter({ subsets: ["latin"] });

if (typeof window !== "undefined") {
  preloadComponents();
}

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || '/';

  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const isAdmin = pathname.startsWith("/admin");
  const isHome = pathname === "/"; 
  const showFloatingChat = !isAuthPage && !isAdmin;

  if (isAuthPage) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className} suppressHydrationWarning>
          <main className="flex min-h-screen items-center justify-center">
            {children}
          </main>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={false}>
            {isHome ? ( 
              <>
                {children}
                {showFloatingChat && <FloatingChatButton />}
              </>
            ) : (
              <div className="flex min-h-screen w-full flex-col md:flex-row bg-background">
                <Suspense fallback={<Loading />}>
                  {isAdmin ? (
                    <AdminSidebar />
                  ) : (
                    <ClientSidebar />
                  )}
                </Suspense>
                <div className="flex-1 flex flex-col min-w-0 relative">
                  <div className="sticky top-0 z-50 w-full">
                    <Suspense fallback={<Loading />}>
                      {isAdmin ? (
                        <AdminTopNav />
                      ) : (
                        <ClientTopNav />
                      )}
                    </Suspense>
                  </div>
                  <main className="flex-1 overflow-y-auto">
                    <div className="h-full w-full">
                      <RouteTemplate>{children}</RouteTemplate>
                    </div>
                  </main>
                </div>
                {showFloatingChat && <FloatingChatButton />}
              </div>
            )}
            <Toaster />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
