<script>
	import { useIntersectionObserver } from '$lib/scripts/utils.svelte';
	import { onMount } from 'svelte';

	/** Scales the `startOffset` of the `textPath` to the values `0-100` */
	let scaledOffset = $state(0);
	let pathOffset = $derived((scaledOffset + 50) * -1);

	let pathAnimationObserver = useIntersectionObserver({ threshold: 0.5 });

	function handleOffsetChange() {
		pathOffset = (scaledOffset + 50) * -1;
	}

	function handleWindowScroll() {
		const container = document.querySelector('main');

		// if (container && pathAnimationObserver.intersecting) {
		if (container) {
			const boundingRect = container.getBoundingClientRect();

			/** Turn the scroll position of the top edge of the `boundingRect` into a percentage value of the height of the `boudingRect` */
			let scrollCalc = ((boundingRect.top * -1) / boundingRect.height) * 100;
			// scrollCalc = Math.round(scrollCalc);
			// console.log('main height: ', ((boundingRect.top * -1) / boundingRect.height) * 100);
			scaledOffset = scrollCalc;
		}
	}
</script>

<svelte:head>
	<title>SVG Text Path - Martin's Laboratory</title>
</svelte:head>

<svelte:window onscroll={handleWindowScroll} />

<main>
	<div class="bumper">
		<p>Scroll down to see the action</p>
	</div>
	<!-- <div class="bumper"></div> -->
	<div
		class="container"
		bind:this={pathAnimationObserver.ref}
		class:observed={pathAnimationObserver.intersecting}
	>
		<svg
			viewBox="0 0 1920 1080"
			version="1.1"
			id="svg1"
			xmlns="http://www.w3.org/2000/svg"
			style="user-select: none;"
		>
			<path
				style="fill:none;stroke:transparent;stroke-width:10"
				d="m -224.86486,540 c 0,0 228.7087038,-5.70571 620.78078,223.003 C 787.98799,991.71171 1366.3304,755.86067 1520.2402,697.65766 1674.15,639.45465 1900.7808,480.36036 2148.7087,540"
				id="path1"
			/>
			<text fill="currentColor">
				<textPath href="#path1" startOffset="{pathOffset}%"
					>Hello world! Hello world! Hello world! Hello world! Hello world! Hello world! Hello
					world! Hello world! Hello world! Hello world! Hello world! Hello world! Hello world! Hello
					world! Hello world!</textPath
				>
			</text>
		</svg>
		<!-- {@render Controls()} -->
	</div>
	<!-- <div class="bumper"></div> -->
</main>

<div class="bumper"></div>
<div class="bumper"></div>
<div class="bumper"></div>

{#snippet Controls()}
	<div class="all-controls">
		<div class="controls rough">
			<label for="path-offset">{pathOffset}</label>
			<input
				type="range"
				name="path-offset"
				id="path-offset"
				min={-290}
				max={85}
				bind:value={pathOffset}
			/>
		</div>
		<div class="controls fine">
			<input
				type="range"
				name="path-offset--fine"
				id="path-offset--fine"
				min={-210}
				max={0}
				bind:value={pathOffset}
			/>
		</div>
		<div class="controls clean">
			<input
				type="range"
				name="path-offset--clean"
				id="path-offset--clean"
				min={-150}
				max={-50}
				bind:value={pathOffset}
			/>
		</div>
		<div class="controls scaled">
			<input
				type="range"
				name="path-offset--scaled"
				id="path-offset--scaled"
				min={0}
				max={100}
				bind:value={scaledOffset}
				oninput={handleOffsetChange}
			/>
			<label for="path-offset--scaled">{scaledOffset}</label>
		</div>
	</div>
{/snippet}

<style>
	main {
		font-size: var(--text-xxxl);
		height: 200vh;

		.container {
			font-family: var(--font-martian);
			color: var(--color-neutral-200);
		}
		.container.observed {
			/*background-color: green;*/
			color: var(--color-neutral-800);
		}
	}
	.bumper {
		height: 40vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.controls {
		font-size: var(--text-md);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		input {
			width: 600px;
		}
	}
</style>
