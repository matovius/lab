<script>
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Martin's Laboratory</title>
</svelte:head>

<main>
	<div class="container">
		<h1>Welcome to the Laboratory of Martin Matovu</h1>
		<p>
			Here, I conduct experiments in Svelte. Do take a gander! You'll note that stuff is quite
			unpolished around here. This zone is for pure experimentation, and not for aesthetics.
		</p>

		<ul>
			<li>
				<a href={resolve('/video-canvas')}>Video Canvas</a>
				<p>
					On rendering videos inside the HTML Canvas. You could call it a canvas-based video payer.
				</p>
			</li>
		</ul>
	</div>
</main>

<style>
	main {
		padding-inline: 1.25rem;

		.container {
			width: 100%;
			max-width: 1200px;
			margin-inline: auto;
		}
	}

	h1 {
		letter-spacing: -3px;
		margin-block-start: 1em;
		text-wrap: balance;

		+ p {
			font-size: var(--text-md);
			font-weight: 600;
			margin-block: 2em;
			color: var(--color-neutral-600);
		}
	}

	ul {
		list-style: none;
		display: grid;
		gap: 2rem;

		li {
			display: grid;
			gap: 0.5rem;

			p {
				color: var(--color-neutral-500);
			}

			&:hover p {
				color: var(--color-neutral-800);
			}
		}
	}
</style>
