import { authMiddleware } from "@clerk/nextjs"; 


// allowing endpoints of api
export default authMiddleware({
    publicRoutes: ['/api/webhooks/clerk']
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};