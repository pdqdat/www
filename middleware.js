import { get } from '@vercel/global-config';

export const config = {
    // Run middleware on all paths except static assets, images, and vercel internals
    matcher: ['/((?!assets|_vercel|.*\\..*).*)'],
};

export default async function middleware(request) {
    const url = new URL(request.url);
    // remove leading slash (e.g., "gdhh")
    const path = url.pathname.slice(1);

    if (!path) return;

    try {
        const redirects = await get('redirects');
        
        if (redirects && redirects[path]) {
            return Response.redirect(redirects[path], 301);
        }
    } catch (error) {
        // Fail silently so the main app still loads if Global Config is unavailable
        console.error('Global Config error:', error);
    }
}
