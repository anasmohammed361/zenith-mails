import { integer, sqliteTable, text, primaryKey } from 'drizzle-orm/sqlite-core';
import type { AdapterAccount } from '@auth/core/adapters';

export const users = sqliteTable('user', {
	id: text('id').notNull().primaryKey(),
	name: text('name'),
	email: text('email').notNull().unique(),
	emailVerified: integer('emailVerified', { mode: 'timestamp_ms' }),
	image: text('image')
});

export const accounts = sqliteTable(
	'account',
	{
		userId: text('userId')
			.notNull()
			.references(() => users.id, { onDelete: 'cascade' }),
		type: text('type').$type<AdapterAccount['type']>().notNull(),
		provider: text('provider').notNull(),
		providerAccountId: text('providerAccountId').notNull(),
		refresh_token: text('refresh_token'),
		access_token: text('access_token'),
		expires_at: integer('expires_at'),
		token_type: text('token_type'),
		scope: text('scope'),
		id_token: text('id_token'),
		session_state: text('session_state')
	},
	(account) => ({
		compoundKey: primaryKey({
			columns: [account.provider, account.providerAccountId]
		})
	})
);

export const sessions = sqliteTable('session', {
	sessionToken: text('sessionToken').notNull().primaryKey(),
	userId: text('userId')
		.notNull()
		.references(() => users.id, { onDelete: 'cascade' }),
	expires: integer('expires', { mode: 'timestamp_ms' }).notNull()
});

export const verificationTokens = sqliteTable(
	'verificationToken',
	{
		identifier: text('identifier').notNull(),
		token: text('token').notNull(),
		expires: integer('expires', { mode: 'timestamp_ms' }).notNull()
	},
	(vt) => ({
		compoundKey: primaryKey({ columns: [vt.identifier, vt.token] })
	})
);

export const mailHistory = sqliteTable('mailHistory', {
	id: integer('id').notNull().primaryKey({autoIncrement:true}),
	provider: text('provider').notNull().$type<'google'|'custom'>(),
	fromAddress: text('fromAddress').notNull(),
	toAddresses: text('toAddresses',{mode:"json"}).notNull().$type<{
		to:string;
		status:'success'|'failed';
		message?:string;
	}[]>(),
	subject: text('subject').notNull(),
	content: text('content').notNull(),
	sentAt: integer('sentAt',{mode:"timestamp"}).notNull().$defaultFn(()=>new Date()),
	sentUserId: text('sentUserId').notNull().references(()=>users.id,{onDelete:"cascade"}),
	attachments: text('attachments',{mode:"json"}).$type<string[]>().notNull(),
	type: text('type').notNull().$type<'text'|'html'>()
});
