<script lang="ts">
	import type { SvelteComponent } from "svelte";

  interface TheProps {
    bg?: string;
    fg?: string;
    children: any;
  }
  let { bg = '#121212', fg = '#ffffff', children }: TheProps = $props();
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
