import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig(({ mode }) => {
	return {
		server: { port: 4500 },
		preview: { port: 4500 },
		plugins: [sveltekit()],

		test: {
			include: ['src/**/*.{test,spec}.{js,ts}'],
		},
	}
})
