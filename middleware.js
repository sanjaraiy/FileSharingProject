import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ['/']
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",  // Matches all paths except those containing a dot (static files) and _next (Next.js internals)
    "/",                       // Matches the root path
    "/(api|trpc)(.*)"          // Matches API and trpc routes
  ]
};