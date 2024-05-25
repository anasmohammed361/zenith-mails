import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { partytownVite } from '@builder.io/partytown/utils'
import { join } from 'path'
export default defineConfig({
	plugins: [sveltekit(), partytownVite({
		dest: join(__dirname, 'static', '~partytown'),
	}),]
});
