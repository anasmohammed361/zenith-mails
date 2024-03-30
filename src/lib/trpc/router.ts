import { t } from ".";
import { mailRouter } from "./routes/mail";

export const router = t.router({
    mail:mailRouter
});

export const createCaller = t.createCallerFactory(router);

export type Router = typeof router;
