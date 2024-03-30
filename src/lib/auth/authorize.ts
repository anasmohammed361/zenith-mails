import { redirect, type Handle } from '@sveltejs/kit';

export const authorizationHandle: Handle = async function ({ event, resolve }) {
	const session = await event.locals.auth();
	if (event.url.pathname.startsWith('/auth')) {
		if (session) {
			// Redirect to the home page
			throw redirect(303, '/');
		}
	}
	// Protect any routes under /authenticated
	if (event.url.pathname.startsWith('/authenticated')) {
		if (!session) {
			// Redirect to the signin page
			throw redirect(303, '/auth');
		}
	}

	// If the request is still here, just proceed as normally
	return resolve(event);
};
