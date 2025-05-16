// Preload critical components
export const preloadComponents = () => {
  const components = [
    () => import('@/components/top-nav'),
    () => import('@/components/app-sidebar'),
    () => import('@/components/ui/sidebar')
  ];

  // Preload each component
  components.forEach(importComponent => {
    importComponent().catch(() => {
      // Ignore errors, this is just preloading
    });
  });
};

// Preload critical routes
export const preloadRoutes = () => {
  const routes = [
    () => import('./calendar/page'),
    () => import('./my-wallet/page'),
    () => import('./anonymous-chat/page')
  ];

  // Preload each route
  routes.forEach(importRoute => {
    importRoute().catch(() => {
      // Ignore errors, this is just preloading
    });
  });
};
