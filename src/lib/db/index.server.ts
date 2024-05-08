import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client/web';
import { TURSO_AUTH_TOKEN, TURSO_DATABASE_URL } from '$env/static/private';

const turso = createClient({
	url: TURSO_DATABASE_URL,
	authToken: TURSO_AUTH_TOKEN
});

export const db = drizzle(turso);
