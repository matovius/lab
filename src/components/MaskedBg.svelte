<script>
	import { onMount } from 'svelte';

	let coordinates = $state({
		x: 0,
		y: 0
	});
	/** @type { string[] } */
	let BunchOfText = $state([]);

	/** @type { (ev: MouseEvent) => void } */
	function trackMouse(ev) {
		coordinates = {
			x: ev.clientX,
			y: ev.clientY
		};
	}

	onMount(() => {
		for (let i = 0; i <= 100; i++) {
			BunchOfText.push('isnevertheend');
		}
	});
</script>

<svelte:document onmousemove={trackMouse} />

<div class="maskable__container">
	<!-- <span
    style="
      mask-image: radial-gradient(circle 360px at {coordinates.x}px {coordinates.y}px, white 20%, transparent);
      background-image: radial-gradient(circle 360px at {coordinates.x}px {coordinates.y}px, #FF4141 0%, #FFC850 25%, #00B4FF 50%, #501EB4 70%, #220C4D 100%)">
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
  </span> -->
	<span class="maskable" style="--_x: {coordinates.x}px; --_y: {coordinates.y}px;">
		{#each BunchOfText as text}
			<span>
				{text}
			</span>
		{/each}
	</span>
</div>

<style>
	.maskable__container {
		width: 600px;
		aspect-ratio: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		/*mask: radial-gradient(ellipse at center, white 5%, transparent 70%);*/
		overflow: clip;

		.maskable {
			--_size: 360px;
			color: transparent;
			font-size: 24px;
			font-family: var(--font-martian);
			line-height: 1;
			user-select: none;
			flex-wrap: wrap;
			text-transform: uppercase;
			background-clip: text;
			line-break: anywhere;
			/*mask-image: radial-gradient(circle var(--_size) at var(--_x) var(--_y), white 20%, transparent);*/
			background-image: radial-gradient(
				circle var(--_size) at var(--_x) var(--_y),
				#ff4141 0%,
				#ffc850 25%,
				#00b4ff 50%,
				#501eb4 75%,
				#220c4d
			);

			& > span {
			}
		}
	}
</style>
