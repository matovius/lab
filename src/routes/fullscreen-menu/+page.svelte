<script>
	import { quadOut } from 'svelte/easing';
	import { blur, fly } from 'svelte/transition';

	let isMenuOpen = $state(false);
</script>

<header>
	<span class="p">Fullscreen Menu</span>
	<details class="menu-container fix-z-index" bind:open={isMenuOpen}>
		{#if isMenuOpen}
			<div
				class="backdrop"
				transition:blur={{ duration: 200, easing: quadOut, amount: 12, opacity: 0 }}
			></div>
		{/if}
		<summary class="trigger">MENU</summary>
		<menu>
			{#if isMenuOpen}
				<ul
					class="menu-list"
					transition:fly={{
						delay: 150,
						duration: 500,
						easing: quadOut,
						x: 0,
						y: '-0.2em',
						opacity: 0
					}}
				>
					<li>Hello</li>
					<li>World</li>
					<li>This</li>
					<li>Is A</li>
					<li>Test</li>
				</ul>
			{/if}
		</menu>
	</details>
</header>

<main>
	<hgroup>
		<h1>Prototype demo of a fullscreen dropdown menu</h1>
		<p>Tap the button labeled "MENU" to test it out.</p>
		<p>
			This experiment uses the HTML <code>details</code> element to build a functional, albeit not animated,
			fullscreen dropdown menu.
		</p>
	</hgroup>
</main>

<style>
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0.75rem;
		background-color: white;
		position: fixed;
		inset-inline: 0;
		inset-block-start: 0;

		span.p {
			font-family: var(--font-martian);
			/*padding: 1em;*/
		}
	}

	details.menu-container {
		position: relative;

		.backdrop {
			width: 100%;
			height: 100%;
			background-color: white;
			position: fixed;
			inset: 0;
			z-index: -2;
			/*display: none;*/
		}

		summary.trigger {
			font-family: var(--font-martian);
			font-weight: 600;
			list-style: none;
			padding-inline: 2em;
			padding-block: 1em;
			border: 2px solid var(--color-neutral-200);
			user-select: none;
			cursor: pointer;

			&::marker,
			&::-webkit-details-marker {
				display: none;
			}

			&:hover {
				background-color: var(--color-neutral-200);
			}
		}

		menu {
			width: calc(100vw + 0.5rem);
			height: calc(100vh + 0.5rem);
			/*background-color: white;*/
			padding-block-start: 90px;
			z-index: -1;
			position: absolute;
			inset-block-start: -1.25rem;
			inset-inline-end: -1.25rem;
			overflow-y: auto;
		}

		ul.menu-list {
			font-family: var(--font-martian);
			font-size: var(--text-xxl);
			width: 100%;
			display: grid;
			gap: 1em;

			> li {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}

	main {
		height: 200vh;
		padding-block: 7.5rem;
		padding-inline: 1.25rem;

		hgroup {
			display: grid;
			gap: 1.25rem;
			padding-block: 7.5rem;

			h1 {
				letter-spacing: -3px;
			}
		}
	}
</style>
