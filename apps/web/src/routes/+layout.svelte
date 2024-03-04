<script lang="ts">
	// Supports weights 100-900
	import '@fontsource-variable/rubik'
	import { QueryClientProvider } from '@tanstack/svelte-query'
	import '../app.css'
	import type { LayoutData } from './$types'

	export let data: LayoutData
</script>

<div class="min-h-[100vh] flex flex-col subpixel-antialiased font-sans text-base-black-text">
	<QueryClientProvider client={data.queryClient}>
		<slot />
	</QueryClientProvider>
</div>
