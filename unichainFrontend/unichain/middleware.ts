import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Critical routes that need prefetching
const CRITICAL_ROUTES = ['/calendar', '/my-wallet', '/anonymous-chat']

// Critical components that should be prefetched
const CRITICAL_COMPONENTS = [
  '/_next/static/chunks/components_top-nav',
  '/_next/static/chunks/components_app-sidebar',
  '/_next/static/chunks/components_ui_sidebar'
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const response = NextResponse.next()

  // Add Link headers for route and component prefetching
  const linkHeader: string[] = []

  // Always prefetch critical components
  CRITICAL_COMPONENTS.forEach(component => {
    linkHeader.push(`<${component}>; rel=prefetch; as=script`)
  })

  // Prefetch related routes based on current path
  if (CRITICAL_ROUTES.includes(pathname)) {
    const currentIndex = CRITICAL_ROUTES.indexOf(pathname)
    // Prefetch next route in sequence
    if (currentIndex < CRITICAL_ROUTES.length - 1) {
      const nextRoute = CRITICAL_ROUTES[currentIndex + 1]
      linkHeader.push(`<${nextRoute}>; rel=prefetch; as=document`)
    }
  }

  // Set Link header if we have items to prefetch
  if (linkHeader.length > 0) {
    response.headers.set('Link', linkHeader.join(','))
  }

  return response
}

// Configure middleware to run on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
