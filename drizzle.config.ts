import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

if (process.env.TURSO_DATABASE_URL === undefined) {
	throw new Error('TURSO_DATABASE_URL is not set');
}
if (process.env.TURSO_AUTH_TOKEN === undefined) {
	throw new Error('TURSO_AUTH_TOKEN is not set');
}

/**
 * Configuration object for the Drizzle library.
 */
export default {
	schema: './src/lib/db/schema.ts',
	out: './drizzle/migrations',
	driver: 'turso',
	dbCredentials: {
		url: process.env.TURSO_DATABASE_URL,
		authToken: process.env.TURSO_AUTH_TOKEN
	},
	dialect:"sqlite"
} satisfies Config;
