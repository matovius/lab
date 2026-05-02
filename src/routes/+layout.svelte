<script>
	import '@fontsource-variable/inter';
	import '@fontsource-variable/martian-mono';
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	/**
	 * @typedef Props
	 * @prop { import('svelte').Snippet } children
	 */

	/** @type { Props } */
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
