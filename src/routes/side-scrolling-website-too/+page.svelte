<script>
	let mainScroll = $state(0);
	/** @type { HTMLElement | null } */
	let mainEl = $state(null);

	function handleWindowScroll() {
		if (mainEl) {
			const rect = mainEl.getBoundingClientRect();
			// console.log(Math.abs(rect.top) / mainEl.offsetHeight);
			mainScroll = Math.abs(rect.top) / (mainEl.offsetHeight - window.innerHeight);
		}
	}
</script>

<svelte:head>
	<title>Side-scrolling 2 - Martin's Laboratory</title>
</svelte:head>

<svelte:window onscroll={handleWindowScroll} />

<main style="--scroll: {mainScroll}" bind:this={mainEl}>
	<section class="one">
		<div class="container">
			<div class="hero">
				<h1>A side scrolling experiment</h1>
				<p>
					Inspired by the style of the Sid Lee website. I also ripped some of the content from there
					just for presentation purposes. Any and all rights to their content are held by them. This
					experiment is a lot more basic than what's done on that website.
				</p>
			</div>
		</div>
	</section>

	{@render SectionTwo()}
	{@render SectionThree()}
	{@render SectionFour()}
	{@render SectionFive()}
</main>

<footer>
	<h2 class="h1">Here's the footer</h2>
</footer>

{#snippet SectionTwo()}
	<section class="two" style="--_bg: var(--color-two);">
		<div class="container">
			<div class="section-intro">
				<h2>We break the ordinary</h2>
			</div>
			<div class="section-content">
				<p>
					Since our inception in 1993, we've broken the ordinary, rethinking how brands connect at
					the intersection of craft, culture and innovation.
				</p>
				<p>
					We don't follow change, we shape it. By challenging what's expected, we create work that
					defines what's next, not just for brands, but for the world they move in.
				</p>
			</div>
			<div class="section-cta">
				<button>
					<span class="h3">See more of our work</span>
				</button>
			</div>
		</div>
	</section>
{/snippet}

{#snippet SectionThree()}
	<section class="three" style="--_bg: var(--color-three);">
		<div class="container">
			<div class="section-intro">
				<h2>Architects of innovation</h2>
			</div>
			<div class="section-content">
				<p>
					We build what's next. As architects of ideas, culture and creativity, we use innovation to
					flip the expected, not just make noise.
				</p>
				<p>
					New tools, fresh thinking, and uncommon moves: that's how we turn bold ideas into real
					impact.
				</p>
			</div>
			<div class="section-cta">
				<button>
					<span class="h3">See more of our work</span>
				</button>
			</div>
		</div>
	</section>
{/snippet}

{#snippet SectionFour()}
	<section class="four" style="--_bg: var(--color-four);">
		<div class="container">
			<div class="section-intro">
				<h2>Culture-shaping work</h2>
			</div>
			<div class="section-content">
				<p>
					By tapping into what moves people, we build bold, authentic stories that spark
					conversations, shift perceptions, and bring communities together.
				</p>
			</div>
			<div class="section-cta">
				<button>
					<span class="h3">See more of our work</span>
				</button>
			</div>
		</div>
	</section>
{/snippet}

{#snippet SectionFive()}
	<section class="five" style="--_bg: var(--color-five);">
		<div class="container">
			<div class="section-intro">
				<h2>Portraits of our people</h2>
			</div>
			<div class="section-content">
				<p>
					Meet the originators, icons, collaborators, and cultural pioneers that are carving out
					their own lanes in and around Sid Lee's creative community.
				</p>
			</div>
			<div class="section-cta">
				<button>
					<span class="h3">See more of our work</span>
				</button>
			</div>
		</div>
	</section>
{/snippet}

<style>
	:global(body) {
		overflow-x: hidden;
	}

	main {
		--color-one: #ffffff;
		--color-two: #c8fc0f;
		--color-three: #ff440b;
		--color-four: #9ea145;
		--color-five: #d2bbf8;
		/* The scale count is 4 since we don't need to count the first section as it's already in view */
		--_scale-count: 6.5;

		height: calc(100vw * var(--_scale-count));
		display: flex;
		flex-direction: row;
		isolation: isolate;
		transform: translateX(0);
		animation: sideScroll 1s linear infinite;
		animation-play-state: paused;
		animation-delay: calc(var(--scroll) * -1s);
		/* Cover overshoot weirdness */
		animation-iteration-count: 1;
		animation-fill-mode: both;
	}

	section {
		height: fit-content;
		background-color: var(--color-one);
		position: sticky;
		top: 0;

		> .container {
			/*text-align: center;*/
			text-transform: uppercase;
			/*width: 100vw;*/
			height: 100vh;
			display: flex;
			flex-direction: row;
			background-color: var(--color-one);

			> * {
				height: 100%;
			}
		}

		&.one {
			> .container {
				min-width: 100vw;
				padding-inline: 10vw;
			}
		}

		.hero {
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding-inline: 10vw;

			> p {
				max-width: 600px;
				margin-block-start: 2em;
			}
		}

		.section-intro {
			width: 100vw;
			display: flex;
			justify-content: center;
			align-items: center;
			/*padding-block: 60lvh;*/
			padding-inline: 10vw;
			background-color: var(--_bg);
		}
		.section-content {
			padding-block: 20vh;
			padding-inline: 10vw;
			background-color: var(--color-one);
			/*box-shadow: 0 -5vh 60px 10px color-mix(in oklab, black, transparent 90%);*/

			> p {
				max-width: 600px;
				margin-inline: auto;
				margin-block: 1.5em;
			}
		}
		.section-cta {
			display: flex;
			justify-content: center;
			align-items: center;
			padding-inline-end: 20vw;

			> button {
				padding-block: 1em;
				padding-inline: 2em;
				background-color: var(--_bg);
				cursor: pointer;

				&:hover {
					transform: translateY(-0.2em) scale(1.1);
				}
				&:active {
					transition-duration: 50ms;
					transform: translateY(0) scale(0.95);
				}
			}
		}
	}

	footer {
		color: white;
		text-align: center;
		height: 100svh;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: color-mix(in oklab, white, black 80%);
		z-index: 2;
	}

	@keyframes sideScroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-100% * var(--_scale-count)));
		}
	}
</style>
