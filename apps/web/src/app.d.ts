// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare global {
	namespace App {
		// interface Locals {}
		// interface Error {}
		// interface PageData {}
		// interface Platform {}
	}
}

// Squelch warnings of image imports from your assets dir
declare module '$lib/assets/*' {
	const meta: object[]
	export default meta
}

export {}
