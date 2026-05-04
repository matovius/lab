<script>
	import { onDestroy } from 'svelte';

	/**
	 * @typedef Props
	 * @prop { import('svelte').Snippet } children
	 * @prop { boolean } open Controls/tracks whether the dialog is open or closed.
	 */

	/** @type { Props } */
	let { children, open = $bindable(false) } = $props();

	/** @type { HTMLDialogElement | null } */
	let Modal = $state(null);
	/**  */
	let isOpen = $state(false);

	$effect(() => {
		if (Modal) {
			if (isOpen) {
				Modal.showModal();
			} else {
				Modal.close();
			}
		}
	});
	/**
	 * Handle keydown events for closing the dialog.
	 * @param { KeyboardEvent } ev
	 */
	function handleKeydown(ev) {
		if (ev.key === 'Escape' && isOpen) {
			ev.preventDefault();
			isOpen = false;
		} else {
			return;
		}
	}

	onDestroy(() => {
		isOpen = false;
	});
</script>

<svelte:window onkeydown={handleKeydown} />

<dialog bind:this={Modal}>
	<div class="container">
		{@render children()}
	</div>
</dialog>

<style>
	dialog {
		border: none;
		position: relative;
		overflow: visible;
		isolation: isolate;
		overscroll-behavior: contain;

		&::backdrop {
			background-color: color-mix(in oklab, var(--color-black), transparent 50%);
			backdrop-filter: blur(8px);
		}

		> .container {
			width: 100vw;
			height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 1.25rem;
			position: absolute;
			/*inset: 0;*/
		}
	}
</style>
