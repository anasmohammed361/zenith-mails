
import { sequence } from '@sveltejs/kit/hooks';
import { authorizationHandle } from '$lib/auth/authorize';
import { trpcHandle } from '$lib/trpc/handle';
import { authenticationHandle } from '$lib/auth';

export const handle = sequence(authenticationHandle, authorizationHandle,trpcHandle);
