import { t } from '.';
import { fileRouter } from './routes/file';
import { mailRouter } from './routes/mail';

export const router = t.router({
	mail: mailRouter,
	file: fileRouter
});

export const createCaller = t.createCallerFactory(router);

export type Router = typeof router;
