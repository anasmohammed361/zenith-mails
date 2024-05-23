import { db } from '@/db/index.server';
import type { RequestEvent } from '@sveltejs/kit';

export async function createContext(event: RequestEvent) {
  return {
    db,
    event // 👈 `event` is now available in your context
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
