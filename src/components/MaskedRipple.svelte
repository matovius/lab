<script>
	import { onMount } from 'svelte';
	import Icons from '$components/Icons.svelte';

	/** @type { string[] } */
	let BunchOfText = $state([]);
	/** @type { number } */
	let size = $state(0);
	/** @type { boolean } */
	let isPlaying = $state(false);

	onMount(() => {
		for (let i = 0; i <= 100; i++) {
			BunchOfText.push('isnevertheend');
		}
	});
</script>

<!-- NOTE: This thing doesn't work as needed -->

<div class="maskable__container">
	<span class="maskable {isPlaying ? 'ripple' : ''}">
		{#each BunchOfText as text}
			<span>
				{text}
			</span>
		{/each}
	</span>
</div>

<div class="animation-controls">
	<button
		class="play-button"
		onclick={() => {
			isPlaying = true;
		}}
	>
		<Icons icon="play" />
	</button>
</div>

<style>
	.maskable__container {
		width: 600px;
		aspect-ratio: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 48px;
		border: 2px solid #444;
		/*mask: radial-gradient(ellipse at center, white 5%, transparent 70%);*/
		overflow: hidden;

		.maskable {
			--_size: 0px;
			transition: 5s ease-out;
			color: transparent;
			font-size: 20px;
			font-family: var(--font-martian);
			line-height: 1;
			user-select: none;
			text-transform: uppercase;
			background-clip: text;
			line-break: anywhere;
			/*mask-image: radial-gradient(circle var(--_size) at var(--_x) var(--_y), white 20%, transparent);*/
			background-image: radial-gradient(
				circle var(--_size) at center,
				#ff4141 0%,
				#ffc850 25%,
				#00b4ff 50%,
				#501eb4 75%,
				#220c4d
			);
		}
	}

	.animation-controls {
		position: fixed;
		inset-block-end: 20px;
	}
	.play-button {
		/*color: #fff;*/
		padding: 10px;
		background-color: #fff;

		&:hover {
			scale: 1.2;
		}
		&:active {
			scale: 0.98;
		}
	}

	.ripple {
		animation: ripple 5s ease-out;
	}

	@keyframes ripple {
		from {
			--_size: 0px;
		}
		to {
			--_size: 600px;
		}
	}
</style>
