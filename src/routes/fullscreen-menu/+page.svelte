<script>
	import ExperimentNotes from '$components/experiment-data/ExperimentNotes.svelte';

	let isMenuOpen = $state(false);
</script>

<header>
	<span class="p">Fullscreen Menu</span>
	<details class="menu-container fix-z-index" bind:open={isMenuOpen}>
		<!-- {#if isMenuOpen}
			<div
				class="backdrop"
				transition:blur={{ duration: 200, easing: quadOut, amount: 12, opacity: 0 }}
			></div>
		{/if} -->
		<summary class="trigger">MENU</summary>
		<menu>
			<ul class="menu-list">
				<li style="--_stagger: 5">
					<span>Hello</span>
				</li>
				<li style="--_stagger: 4">
					<span>World</span>
				</li>
				<li style="--_stagger: 3">
					<span>This</span>
				</li>
				<li style="--_stagger: 2">
					<span>Is A</span>
				</li>
				<li style="--_stagger: 1">
					<span>Test</span>
				</li>
			</ul>
		</menu>
	</details>
</header>

<main>
	<hgroup>
		<h1>Prototype demo of a fullscreen dropdown menu</h1>
		<p>Tap the button labeled "MENU" to test it out.</p>
		<!-- <p>
			This experiment uses the HTML <code>details</code> element to build a functional, albeit not animated,
			fullscreen dropdown menu.
		</p> -->
	</hgroup>
</main>

<ExperimentNotes>
	<p>
		In this experiment, I use the <code>details</code> HTML element to build a fullscreen dropdown
		menu. This is a simpler technical experiment, but it was interesting nonetheless.<br /><br />I
		have found doing animations and transitions when the menu opens to be problematic. I currently
		don't know how to make it work. Maybe at some point.
	</p>
</ExperimentNotes>

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
			display: none;
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
			background-color: white;
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
				/*transform: translateY(-0.2em);
				opacity: 0;*/
			}

			span {
				&:hover {
					transform: scale(1.3) rotate(-15deg);
					transition: 150ms;
				}
			}
		}
		/* These styles don't animate for some reason. Investigate at some point. */
		/*&[open] {
			& ul.menu-list > li {
				transform: translateY(0);
				opacity: 1;
				transition-duration: 500ms;
				transition-delay: calc(100ms * var(--_stagger));
			}
		}*/
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
