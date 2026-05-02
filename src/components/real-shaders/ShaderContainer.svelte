<script>
	import { onMount } from 'svelte';

	/**
	 * @typedef Props
	 * @prop { import('svelte').Snippet } [children]
	 */

	/**
	 * @typedef CanvasDimensions
	 * @prop { number } width
	 * @prop { number } height
	 */

	/** @type { Props } */
	let { children } = $props();

	/** @type { HTMLCanvasElement | null } */
	let canvas = null;
	/** @type { CanvasRenderingContext2D | null } */
	let ctx = canvas?.getContext('2d');
	// $inspect(ctx);
	/** @type { CanvasDimensions } */
	let canvasDimensions = $state({
		width: window.innerWidth,
		height: window.innerHeight * 2
	});
	// $inspect(canvasDimensions);

	function initCanvas() {
		if (ctx) {
			for (let x = 0; x < canvasDimensions.width; x += 10) {
				for (let y = 0; y < canvasDimensions.height; y += 10) {
					ctx.beginPath();
					ctx.arc(x, y, 2, 0, Math.PI * 2, false);
					ctx.fillStyle = 'red';
					ctx.fill();
					ctx.closePath();
				}
			}
		}
	}

	onMount(() => {
		if (canvas && ctx) {
			console.log('Canvas exists!');
			initCanvas();
		}
	});
</script>

<div class="shader-container">
	<canvas
		class="canvas"
		bind:this={canvas}
		width={canvasDimensions.width}
		height={/*canvasDimensions.height*/ 500}
	></canvas>
	{@render children?.()}
</div>

<style>
	.shader-container {
		background: color-mix(in oklab, black, white 20%);
	}
</style>
