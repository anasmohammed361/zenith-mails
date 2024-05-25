import { t } from '..';
import { TRPCError } from '@trpc/server';

export const authMiddleware = t.middleware(async ({ next, ctx }) => {
    const session = await ctx.event.locals.auth()
    if (!session?.user?.id) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
    } 
  return next({
    ctx:{
        ...ctx,
        user:session.user!
    }
  });
});
