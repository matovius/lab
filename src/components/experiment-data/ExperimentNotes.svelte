<script>
	/**
	 * @typedef Props
	 * @prop { import('svelte').Snippet } children
	 */

	/** @type { Props } */
	let { children } = $props();
	/** @type { HTMLElement } */
	let DropdownTrigger;

	/**
	 * Handle keydown events for closing the dialog.
	 * @param { KeyboardEvent } ev
	 */
	function handleKeydown(ev) {
		if (ev.key === 'n' && ev.altKey) {
			ev.preventDefault();
			DropdownTrigger.click();
			// console.log('Trigger!');
		} else {
			return;
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="experiment-notes">
	<details>
		<summary class="trigger" bind:this={DropdownTrigger}>Notes <small>(alt+n)</small></summary>
		<div class="card">
			{@render children()}
		</div>
	</details>
</div>

<style>
	.experiment-notes {
		position: fixed;
		inset-block-end: 1.25rem;
		inset-inline-end: 1.25rem;
	}

	details {
		position: relative;
	}

	summary.trigger {
		list-style: none;
		color: var(--color-white);
		padding-inline: 0.75em;
		padding-block: 0.25em;
		background-color: var(--color-neutral-800);
		border: 2px solid var(--color-white);
		user-select: none;
		cursor: pointer;

		&:is(:hover, :focus) {
			transform: scale(1.05) translateY(-5px);
			transition: transform 50ms ease-out;
		}
		&:active {
			transform: scale(0.95) translateY(0);
		}
	}

	.card {
		width: max-content;
		min-width: 240px;
		max-width: 300px;
		max-height: 400px;
		overflow-y: auto;
		border: 2px solid var(--color-neutral-200);
		background-color: var(--color-white);
		padding: 1.25rem;
		position: absolute;
		inset-block-end: calc(100% + 1.25rem);
		inset-inline-end: 0;
		overscroll-behavior: contain;
	}
</style>
