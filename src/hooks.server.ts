import { authorizationHandle } from '@/auth/authorize';
import { authenticationHandle } from '@/auth/';
import { sequence } from '@sveltejs/kit/hooks';
import { trpcHandle } from '@/trpc/handle';

export const handle = sequence(authenticationHandle, authorizationHandle,trpcHandle);
