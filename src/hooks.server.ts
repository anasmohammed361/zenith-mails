import { authorizationHandle } from '@/auth/authorize';
import { authenticationHandle } from '@/auth/';
import { sequence } from '@sveltejs/kit/hooks';

export const handle = sequence(authenticationHandle,authorizationHandle );