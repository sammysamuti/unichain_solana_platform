'use client';

import { Suspense, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Loading from "./loading";

// Define route type for better type safety
type CriticalRoute = '/calendar' | '/my-wallet' | '/anonymous-chat';

// Critical routes that need prefetching
const CRITICAL_ROUTES: CriticalRoute[] = ['/calendar', '/my-wallet', '/anonymous-chat'];

// Critical components that should be prefetched
const CRITICAL_COMPONENTS: Record<CriticalRoute, () => Promise<any>> = {
  '/calendar': () => import('./calendar/page'),
  '/my-wallet': () => import('./my-wallet/page'),
  '/anonymous-chat': () => import('./anonymous-chat/page')
};

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Prefetch next route and its components
    const currentIndex = CRITICAL_ROUTES.indexOf(pathname as CriticalRoute);
    if (currentIndex !== -1 && currentIndex < CRITICAL_ROUTES.length - 1) {
      const nextRoute = CRITICAL_ROUTES[currentIndex + 1];
      
      // Prefetch next route
      router.prefetch(nextRoute);

      // Prefetch component for next route
      const prefetchComponent = CRITICAL_COMPONENTS[nextRoute];
      if (prefetchComponent) {
        prefetchComponent().catch(() => {
          // Ignore errors, this is just prefetching
        });
      }
    }
  }, [pathname, router]);

  return (
    <div suppressHydrationWarning>
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </div>
  );
}
