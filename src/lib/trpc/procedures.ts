import { publicProcedure } from ".";
import { authMiddleware } from "./middleware/auth";

export const protectedProcedure = publicProcedure.use(authMiddleware)