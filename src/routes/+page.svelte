<script>
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>Martin's Laboratory</title>
</svelte:head>

<main>
	<div class="container">
		<hgroup>
			<h1>Welcome to the Laboratory of Martin Matovu</h1>
			<p>
				Here, I conduct experiments in Svelte. You'll note that stuff is quite unpolished around
				here. This website is for pure experimentation, and not for aesthetics.
			</p>
			<p>
				Each experiment has a set of notes I wrote in the process of building it. You can see these
				notes by clicking a button in the bottom-right corner of the window.
			</p>
		</hgroup>

		<ul>
			<li>
				<a href={resolve('/video-canvas')}>Video Canvas</a>
				<p>On rendering videos inside the HTML Canvas.</p>
			</li>
			<li>
				<a href={resolve('/svg-text-path')}>SVG Text Path</a>
				<p>On drawing text along an svg path.</p>
			</li>
			<li>
				<a href={resolve('/fullscreen-menu')}>Fullscreen Menu</a>
				<p>On displaying a fullscreen dropdown menu.</p>
			</li>
		</ul>
	</div>
</main>

<footer>
	<small class="copyright-statement">
		A <a href="https://matovius.dev" target="_blank" rel="noopener noreferrer" class="link"
			>@matovius</a
		>
		project. Check out the
		<a href="https://github.com/matovius/lab" target="_blank" rel="noopener noreferrer" class="link"
			>GitHub</a
		>.
	</small>
	<small class="disclaimer">
		Disclaimer: I DO NOT use generative AI in any of my work. It is a personal choice based on what
		I feel about current implementations of the technology and the fact that I enjoy writing code
		myself. Each experiment is a combination of wracking my brain and using accessible web resources
		and tutorials.
	</small>
</footer>

<style>
	main {
		padding-inline: 1.25rem;
		padding-block-end: 5rem;

		.container {
			width: 100%;
			max-width: 1200px;
			margin-inline: auto;
		}
	}

	hgroup {
		h1 {
			letter-spacing: -3px;
			margin-block-start: 0.5em;
			text-wrap: balance;
		}
		p {
			/*font-size: var(--text-md);*/
			/*font-weight: 600;*/
			margin-block-start: 1em;
			color: var(--color-neutral-600);
		}
	}

	ul {
		list-style: none;
		display: grid;
		gap: 2rem;
		padding-block-start: 2.5rem;

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

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1.25rem;
		padding: 1.25rem;

		small.disclaimer {
			color: var(--color-neutral-500);
			text-align: center;
			max-width: 1200px;
		}
	}
</style>
