<script lang="ts">
	interface Props {
		bg?: string;
		fg?: string;
		children: import('svelte').Snippet;
	}
	let { bg = '#121212', fg = '#ffffff', children }: Props = $props();
</script>

<div class="container" style="color: {fg}; background: {bg};">
	{@render children()}
</div>

<style>
	.container {
		width: 100dvw;
		height: 100dvh;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
