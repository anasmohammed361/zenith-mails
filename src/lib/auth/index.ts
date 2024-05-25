import { SvelteKitAuth, type SvelteKitAuthConfig } from '@auth/sveltekit';
import GOOGLE from '@auth/sveltekit/providers/google';
import GiTHUB from '@auth/sveltekit/providers/github';
import { DrizzleAdapter } from '@auth/drizzle-adapter';

import {
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	GITHUB_CLIENT_ID,
	GITHUB_CLIENT_SECRET,
	AUTH_SECRET
} from '$env/static/private';
import { db } from '@/db/index.server';

declare module "@auth/core/jwt" {
	interface JWT extends DefaultJWT {
		id: string
	}
}


export const { handle: authenticationHandle, signIn, signOut } = SvelteKitAuth(async () => {
	const authOptions: SvelteKitAuthConfig = {
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
		},
		secret: AUTH_SECRET,
		trustHost: true,
		pages: {
			signIn: '/',
		},
		basePath: '/auth',
		callbacks: {
			session({ session, token }) {
				session.user.id = token.id as string;
				token
				return session
			},
			jwt({ user, token }) {
				if (user) {
					token.id = user.id
				}
				return token
			}
		}
	}
	return authOptions;
});
