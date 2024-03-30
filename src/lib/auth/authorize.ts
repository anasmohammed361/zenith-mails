import { redirect, type Handle } from '@sveltejs/kit';

export const authorizationHandle:Handle = async function({ event, resolve }) {
    // Protect any routes under /authenticated
    if (event.url.pathname.startsWith('/authenticated')) {
      const session = await event.locals.auth();
      if (!session) {
        // Redirect to the signin page
        throw redirect(303, '/auth');
      }
    }
  
    // If the request is still here, just proceed as normally
    return resolve(event);
  } 