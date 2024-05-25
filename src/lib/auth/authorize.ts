import { redirect, type Handle } from '@sveltejs/kit';

const protectedRoutes = ['/app'];

export const authorizationHandle: Handle = async function ({ event, resolve }) {
	const session = await event.locals.auth();
	console.log({ session });
	
	if (event.url.pathname.startsWith('/auth')) {
		if (session) {
			// Redirect to the home page
			throw redirect(303, '/app');
		}
	}
	
	for (const route of protectedRoutes) {
		if (event.url.pathname.startsWith(route)) {
			if (!session) {
				// Redirect to the signin page
				throw redirect(303, '/auth');
			}
		}
	}
	// If the request is still here, just proceed as normally
	return resolve(event);
};
