import { SvelteKitAuth } from '@auth/sveltekit';
import GOOGLE from '@auth/sveltekit/providers/google';
import GiTHUB from '@auth/sveltekit/providers/github';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import {
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	GITHUB_CLIENT_ID,
	GITHUB_CLIENT_SECRET
} from '$env/static/private';
import { db } from '@/db';

export const { handle:authenticationHandle, signIn, signOut } = SvelteKitAuth({
	adapter: DrizzleAdapter(db),
	providers: [
		GOOGLE({
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET
		}),
		GiTHUB({
			clientId: GITHUB_CLIENT_ID,
			clientSecret: GITHUB_CLIENT_SECRET,
		})
	],
	session: {
		strategy: 'jwt'
	}
});
