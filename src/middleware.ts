import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Routes that can be accessed while signed out
  //anyone-can-visit-this-route
  publicRoutes: ["/"],
  // Routes that can always be accessed, and have
  // no authentication information
  //   ignoredRoutes: ["/"],
});

// Protects all routes, including api/trpc.
// See https://clerk.com/docs/references/nextjs/auth-middleware
// for more information about configuring your Middleware
export const config = {
  //   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
