// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { isAuthenticated } from './utils/auth';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  console.log(`Middleware executed for path: ${pathname}`);

  // // Prevent trailing slash redirection (exclude the root path '/')
  // if (pathname !== '/' && pathname.endsWith('/')) {
  //   const newPathname = pathname.slice(0, -1); // Remove trailing slash
  //   console.log(`Redirecting to remove trailing slash: ${newPathname}`);
  //   return NextResponse.redirect(new URL(newPathname, request.url));
  // }

  // Define public routes (e.g., /login)
  const publicRoutes = ['/login', '/register'];
  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));

  // Check if the user is authenticated
  const isLoggedIn = isAuthenticated({ req: request });
  console.log(`Is user authenticated? ${isLoggedIn}`);

  // If the user is not logged in and tries to access a protected route, redirect to /Sign/In
  if (!isLoggedIn && !isPublicRoute) {
    console.log('Redirecting to /login');
    const signInUrl = new URL('/login', request.url);
    return NextResponse.redirect(signInUrl);
  }

  // Allow the request to proceed
  console.log('Allowing request to proceed');
  return NextResponse.next();
}

// Match all routes except static assets and API routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - api/ (API routes)
     */
    // '/((?!_next/static|_next/image|favicon.ico|api/).*)',
    '/((?!_next/static|_next/image|favicon.ico|api/|assets/).*)',
  ],
};













// // middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import { isAuthenticated } from './utils/auth';

// export async function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;

//   console.log(`Middleware executed for path: ${pathname}`);

//   // Prevent trailing slash redirection
//   if (pathname.endsWith('/')) {
//     const newPathname = pathname.slice(0, -1); // Remove trailing slash
//     console.log(`Redirecting to remove trailing slash: ${newPathname}`);
//     return NextResponse.redirect(new URL(newPathname, request.url));
//   }

//   // Define public routes (e.g., sign-in)
//   const publicRoutes = ['/Sign/In'];
//   const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));

//   // Check if the user is authenticated
//   const isLoggedIn = isAuthenticated({ req: request });
//   console.log(`Is user authenticated? ${isLoggedIn}`);

//   // If the user is not logged in and tries to access a protected route, redirect to /Sign/In
//   if (!isLoggedIn && !isPublicRoute) {
//     console.log('Redirecting to /Sign/In');
//     const signInUrl = new URL('/Sign/In', request.url);
//     return NextResponse.redirect(signInUrl);
//   }

//   // Allow the request to proceed
//   console.log('Allowing request to proceed');
//   return NextResponse.next();
// }

// // Match all routes except static assets and API routes
// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * - api/ (API routes)
//      */
//     '/((?!_next/static|_next/image|favicon.ico|api/).*)',
//   ],
// };













// // // middleware.ts
// // import { NextResponse } from 'next/server';
// // import type { NextRequest } from 'next/server';
// // import { isAuthenticated } from './utils/auth';

// // export async function middleware(request: NextRequest) {
// //   const pathname = request.nextUrl.pathname;

// //   // Log the requested path for debugging
// //   console.log(`Middleware executed for path: ${pathname}`);

// //   // Prevent trailing slash redirection
// //   if (pathname.endsWith('/')) {
// //     const newPathname = pathname.slice(0, -1); // Remove trailing slash
// //     console.log(`Redirecting to remove trailing slash: ${newPathname}`);
// //     return NextResponse.redirect(new URL(newPathname, request.url));
// //   }

// //   // Define public routes (e.g., sign-in, sign-up)
// //   const publicRoutes = ['/Sign/In', '/Sign/Up'];
// //   const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));

// //   // Check if the user is authenticated
// //   const isLoggedIn = isAuthenticated({ req: request });
// //   console.log(`Is user authenticated? ${isLoggedIn}`);

// //   // If the user is not logged in and tries to access a protected route, redirect to /Sign/In
// //   if (!isLoggedIn && !isPublicRoute) {
// //     console.log('Redirecting to /Sign/In');
// //     const signInUrl = new URL('/Sign/In', request.url);
// //     return NextResponse.redirect(signInUrl);
// //   }

// //   // If the user is logged in but tries to access a public route (e.g., /Sign/In), redirect to /dashboard
// //   if (isLoggedIn && isPublicRoute) {
// //     console.log('Redirecting to /dashboard');
// //     const dashboardUrl = new URL('/dashboard', request.url);
// //     return NextResponse.redirect(dashboardUrl);
// //   }

// //   // Allow the request to proceed
// //   console.log('Allowing request to proceed');
// //   return NextResponse.next();
// // }

// // // Match all routes except static assets and API routes
// // export const config = {
// //   matcher: [
// //     /*
// //      * Match all request paths except for the ones starting with:
// //      * - _next/static (static files)
// //      * - _next/image (image optimization files)
// //      * - favicon.ico (favicon file)
// //      * - api/ (API routes)
// //      * - assets/ (custom static assets like images, fonts, etc.)
// //      */
// //     '/((?!_next/static|_next/image|favicon.ico|api/|assets/).*)',
// //   ],
// // };




// // // // middleware.ts
// // // import { NextResponse } from 'next/server';
// // // import type { NextRequest } from 'next/server';
// // // import { isAuthenticated } from './utils/auth';

// // // export async function middleware(request: NextRequest) {
// // //   const pathname = request.nextUrl.pathname;

// // //   // Log the requested path for debugging
// // //   console.log(`Middleware executed for path: ${pathname}`);

// // //   // Prevent trailing slash redirection
// // //   if (pathname.endsWith('/')) {
// // //     const newPathname = pathname.slice(0, -1); // Remove trailing slash
// // //     console.log(`Redirecting to remove trailing slash: ${newPathname}`);
// // //     return NextResponse.redirect(new URL(newPathname, request.url));
// // //   }

// // //   // Define public routes (e.g., sign-in, sign-up)
// // //   const publicRoutes = ['/Sign/In', '/Sign/Up'];
// // //   const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));

// // //   // Check if the user is authenticated
// // //   const isLoggedIn = isAuthenticated({ req: request });
// // //   console.log(`Is user authenticated? ${isLoggedIn}`);

// // //   // If the user is not logged in and tries to access a protected route, redirect to /Sign/In
// // //   if (!isLoggedIn && !isPublicRoute) {
// // //     console.log('Redirecting to /Sign/In');
// // //     const signInUrl = new URL('/Sign/In', request.url);
// // //     return NextResponse.redirect(signInUrl);
// // //   }

// // //   // If the user is logged in but tries to access a public route (e.g., /Sign/In), redirect to /dashboard
// // //   if (isLoggedIn && isPublicRoute) {
// // //     console.log('Redirecting to /dashboard');
// // //     const dashboardUrl = new URL('/dashboard', request.url);
// // //     return NextResponse.redirect(dashboardUrl);
// // //   }

// // //   // Allow the request to proceed
// // //   console.log('Allowing request to proceed');
// // //   return NextResponse.next();
// // // }

// // // // Match all routes except static assets and API routes
// // // export const config = {
// // //   matcher: [
// // //     /*
// // //      * Match all request paths except for the ones starting with:
// // //      * - _next/static (static files)
// // //      * - _next/image (image optimization files)
// // //      * - favicon.ico (favicon file)
// // //      * - api/ (API routes)
// // //      * - assets/ (custom static assets like images, fonts, etc.)
// // //      */
// // //     '/((?!_next/static|_next/image|favicon.ico|api/|assets/).*)',
// // //   ],
// // // };















// // // // middleware.ts
// // // import { NextResponse } from 'next/server';
// // // import type { NextRequest } from 'next/server';
// // // import { isAuthenticated } from './utils/auth';

// // // export async function middleware(request: NextRequest) {
// // //   const pathname = request.nextUrl.pathname;

// // //   // Log the requested path for debugging
// // //   console.log(`Middleware executed for path: ${pathname}`);

// // //   // Prevent trailing slash redirection
// // //   if (pathname.endsWith('/')) {
// // //     const newPathname = pathname.slice(0, -1); // Remove trailing slash
// // //     console.log(`Redirecting to remove trailing slash: ${newPathname}`);
// // //     return NextResponse.redirect(new URL(newPathname, request.url));
// // //   }

// // //   // Define public routes (e.g., sign-in, sign-up)
// // //   const publicRoutes = ['/Sign/In', '/Sign/Up'];
// // //   const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));

// // //   // Check if the user is authenticated
// // //   const isLoggedIn = isAuthenticated({ req: request });
// // //   console.log(`Is user authenticated? ${isLoggedIn}`);

// // //   // If the user is not logged in and tries to access a protected route, redirect to /Sign/In
// // //   if (!isLoggedIn && !isPublicRoute) {
// // //     console.log('Redirecting to /Sign/In');
// // //     const signInUrl = new URL('/Sign/In', request.url);
// // //     return NextResponse.redirect(signInUrl);
// // //   }

// // //   // If the user is logged in but tries to access a public route (e.g., /Sign/In), redirect to /dashboard
// // //   if (isLoggedIn && isPublicRoute) {
// // //     console.log('Redirecting to /dashboard');
// // //     const dashboardUrl = new URL('/dashboard', request.url);
// // //     return NextResponse.redirect(dashboardUrl);
// // //   }

// // //   // Allow the request to proceed
// // //   console.log('Allowing request to proceed');
// // //   return NextResponse.next();
// // // }

// // // // Match all routes except static assets
// // // export const config = {
// // //   matcher: [
// // //     /*
// // //      * Match all request paths except for the ones starting with:
// // //      * - _next/static (static files)
// // //      * - _next/image (image optimization files)
// // //      * - favicon.ico (favicon file)
// // //      * - assets/ (custom static assets like images, fonts, etc.)
// // //      */
// // //     '/((?!_next/static|_next/image|favicon.ico|assets/).*)',
// // //   ],
// // // };























// // // // // middleware.ts
// // // // import { NextResponse } from 'next/server';
// // // // import type { NextRequest } from 'next/server';
// // // // import { isAuthenticated } from './utils/auth';

// // // // export async function middleware(request: NextRequest) {
// // // //   const pathname = request.nextUrl.pathname;

// // // //   // Log the requested path for debugging
// // // //   console.log(`Middleware executed for path: ${pathname}`);

// // // //   // // Prevent trailing slash redirection
// // // //   // if (pathname.endsWith('/')) {
// // // //   //   const newPathname = pathname.slice(0, -1); // Remove trailing slash
// // // //   //   console.log(`Redirecting to remove trailing slash: ${newPathname}`);
// // // //   //   return NextResponse.redirect(new URL(newPathname, request.url));
// // // //   // }

// // // //   // Define public routes (e.g., sign-in, sign-up)
// // // //   const publicRoutes = ['/Sign/In', '/Sign/Up'];
// // // //   const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));

// // // //   // Check if the user is authenticated
// // // //   const isLoggedIn = isAuthenticated({ req: request });
// // // //   console.log(`Is user authenticated? ${isLoggedIn}`);

// // // //   // If the user is not logged in and tries to access a protected route, redirect to /Sign/In
// // // //   if (!isLoggedIn && !isPublicRoute) {
// // // //     console.log('Redirecting to /Sign/In');
// // // //     const signInUrl = new URL('/Sign/In', request.url);
// // // //     return NextResponse.redirect(signInUrl);
// // // //   }

// // // //   // If the user is logged in but tries to access a public route (e.g., /Sign/In), redirect to /dashboard
// // // //   if (isLoggedIn && isPublicRoute) {
// // // //     console.log('Redirecting to /dashboard');
// // // //     const dashboardUrl = new URL('/dashboard', request.url);
// // // //     return NextResponse.redirect(dashboardUrl);
// // // //   }

// // // //   // Allow the request to proceed
// // // //   console.log('Allowing request to proceed');
// // // //   return NextResponse.next();
// // // // }

// // // // // Match all routes except static assets
// // // // export const config = {
// // // //   matcher: [
// // // //     /*
// // // //      * Match all request paths except for the ones starting with:
// // // //      * - _next/static (static files)
// // // //      * - _next/image (image optimization files)
// // // //      * - favicon.ico (favicon file)
// // // //      */
// // // //     '/((?!_next/static|_next/image|favicon.ico).*)',
// // // //   ],
// // // // };

















// // // // // // middleware.ts
// // // // // import { NextResponse } from 'next/server';
// // // // // import type { NextRequest } from 'next/server';

// // // // // export async function middleware(request: NextRequest) {
// // // // //   const pathname = request.nextUrl.pathname;

// // // // //   // Prevent trailing slash redirection
// // // // //   if (pathname.endsWith('/')) {
// // // // //     const newPathname = pathname.slice(0, -1);
// // // // //     return NextResponse.redirect(new URL(newPathname, request.url));
// // // // //   }

// // // // //   return NextResponse.next();
// // // // // }

// // // // // export const config = {
// // // // //   matcher: [
// // // // //     '/((?!_next/static|_next/image|favicon.ico).*)',
// // // // //   ],
// // // // // };

















// // // // // // // middleware.ts
// // // // // // import { NextResponse } from 'next/server';
// // // // // // import type { NextRequest } from 'next/server';
// // // // // // import { isAuthenticated } from './utils/auth';

// // // // // // export async function middleware(request: NextRequest) {
// // // // // //   const pathname = request.nextUrl.pathname;

// // // // // //   // Define public routes (e.g., sign-in, sign-up)
// // // // // //   // const publicRoutes = ['/signin', '/signup'];
// // // // // //   const publicRoutes = ['/Sign/In', '/Sign/Up'];
// // // // // //   const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route));

// // // // // //   // Check if the user is authenticated
// // // // // //   const isLoggedIn = isAuthenticated({ req: request });

// // // // // //   // If the user is not logged in and tries to access a protected route, redirect to /signin
// // // // // //   if (!isLoggedIn && !isPublicRoute) {
// // // // // //     const signInUrl = new URL('/Sign/In', request.url);
// // // // // //     return NextResponse.redirect(signInUrl);
// // // // // //   }

// // // // // //   // If the user is logged in but tries to access a public route (e.g., /signin), redirect to /dashboard
// // // // // //   if (isLoggedIn && isPublicRoute) {
// // // // // //     const dashboardUrl = new URL('/dashboard', request.url);
// // // // // //     return NextResponse.redirect(dashboardUrl);
// // // // // //   }

// // // // // //   // Allow the request to proceed
// // // // // //   return NextResponse.next();
// // // // // // }

// // // // // // // Match all routes except static assets
// // // // // // export const config = {
// // // // // //   matcher: [
// // // // // //     /*
// // // // // //      * Match all request paths except for the ones starting with:
// // // // // //      * - _next/static (static files)
// // // // // //      * - _next/image (image optimization files)
// // // // // //      * - favicon.ico (favicon file)
// // // // // //      */
// // // // // //     '/((?!_next/static|_next/image|favicon.ico).*)',
// // // // // //   ],
// // // // // // };