'use client';

import { Suspense, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loading from "../app/loading";

// Critical routes that need prefetching
const CRITICAL_ROUTES = ['/calendar', '/my-wallet', '/anonymous-chat'];

interface RouteTemplateProps {
  children: React.ReactNode;
}

export function RouteTemplate({ children }: RouteTemplateProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Prefetch next route in sequence
    const currentIndex = CRITICAL_ROUTES.indexOf(pathname);
    if (currentIndex !== -1 && currentIndex < CRITICAL_ROUTES.length - 1) {
      const nextRoute = CRITICAL_ROUTES[currentIndex + 1];
      // Use dynamic import to prefetch the next route
      import(`../app${nextRoute}/page`).catch(() => {
        // Ignore errors, this is just prefetching
      });
    }
  }, [pathname]);

  return (
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
  );
}
