<script>
	/**
	 * @typedef Experiment
		* @prop { string } label
		* @prop { string } description
		* @prop { import('$app/types').ResolvedPathname } url
	*/

	/** @type { Experiment[] } */
	const experimentLinks = [
	  {
			label: 'Video Canvas',
			description: 'On rendering videos inside the HTML Canvas.',
			url: '/video-canvas'
		},
    {
  		label: 'SVG Text Path',
  		description: 'On drawing text along an SVG path.',
  		url: '/svg-text-path'
  	},
    {
     	label: 'Fullscreen Menu',
     	description: 'On displaying a fullscreen dropdown menu.',
     	url: '/fullscreen-menu'
    },
    {
 			label: 'Side-scrolling Website One',
 			description: 'On scrolling a website sideways (method one).',
 			url: '/side-scrolling-website'
		},
    {
  		label: 'Side-scrolling Website Two',
  		description: 'On scrolling a website sideways (method two).',
  		url: '/side-scrolling-website-too'
   	}
	];
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
  		{#each experimentLinks as link (experimentLinks.indexOf(link))}
    		<li>
    		<a href={link.url}>{link.label}</a>
    		<p>{link.description}</p>
    		</li>
  		{/each}
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
