<script>
	/** @type { HTMLElement | null } */
	let sectionTwo = $state(null);
	let sectionTwoScroll = $state(0);
	let isSectionTwoObserved = $state(false);

	/** @type { HTMLElement | null } */
	let sectionThree = $state(null);
	let sectionThreeScroll = $state(0);
	let isSectionThreeObserved = $state(false);

	/** @type { HTMLElement | null } */
	let sectionFour = $state(null);
	let sectionFourScroll = $state(0);
	let isSectionFourObserved = $state(false);

	/** @type { HTMLElement | null } */
	let sectionFive = $state(null);
	let sectionFiveScroll = $state(0);
	let isSectionFiveObserved = $state(false);

	/** @type { (element: HTMLElement, rect: DOMRect) => number } */
	function checkElementScrolled(element, rect) {
		return Math.abs(rect.top) / (element.offsetHeight - window.innerHeight);
	}

	function handleWindowScroll() {
		if (sectionTwo) {
			const sectionTwoRect = sectionTwo.getBoundingClientRect();
			if (sectionTwoRect.top <= 0) {
				isSectionTwoObserved = true;
				// console.log(checkElementScrolled(sectionTwo, sectionTwoRect));
				sectionTwoScroll = checkElementScrolled(sectionTwo, sectionTwoRect);
			} else {
				isSectionTwoObserved = false;
			}
		}
		if (sectionThree) {
			const sectionThreeRect = sectionThree.getBoundingClientRect();
			if (sectionThreeRect.top <= 0) {
				isSectionThreeObserved = true;
				// console.log(checkElementScrolled(sectionThree, sectionThreeRect));
				sectionThreeScroll = checkElementScrolled(sectionThree, sectionThreeRect);
			} else {
				isSectionThreeObserved = false;
			}
		}
		if (sectionFour) {
			const sectionFourRect = sectionFour.getBoundingClientRect();
			if (sectionFourRect.top <= 0) {
				isSectionFourObserved = true;
				// console.log(checkElementScrolled(sectionFour, sectionFourRect));
				sectionFourScroll = checkElementScrolled(sectionFour, sectionFourRect);
			} else {
				isSectionFourObserved = false;
			}
		}
		if (sectionFive) {
			const sectionFiveRect = sectionFive.getBoundingClientRect();
			if (sectionFiveRect.top <= 0) {
				isSectionFiveObserved = true;
				// console.log(checkElementScrolled(sectionFive, sectionFiveRect));
				sectionFiveScroll = checkElementScrolled(sectionFive, sectionFiveRect);
			} else {
				isSectionFiveObserved = false;
			}
		}
	}
</script>

<svelte:head>
	<title>Side-scrolling - Martin's Laboratory</title>
</svelte:head>

<svelte:window onscroll={handleWindowScroll} />

<main>
	<section class="one" style="--_bg: var(--color-one)">
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
	<section
		class="two"
		style="--_bg: var(--color-two); --scroll: {sectionTwoScroll};"
		bind:this={sectionTwo}
		class:observed={isSectionTwoObserved}
	>
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
	<section
		class="three"
		style="--_bg: var(--color-three); --scroll: {sectionThreeScroll};"
		bind:this={sectionThree}
		class:observed={isSectionThreeObserved}
	>
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
	<section
		class="four"
		style="--_bg: var(--color-four); --scroll: {sectionFourScroll};"
		bind:this={sectionFour}
		class:observed={isSectionFourObserved}
	>
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
	<section
		class="five"
		style="--_bg: var(--color-five); --scroll: {sectionFiveScroll};"
		bind:this={sectionFive}
		class:observed={isSectionFiveObserved}
	>
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
	main {
		--color-one: #ffffff;
		--color-two: #c8fc0f;
		--color-three: #ff440b;
		--color-four: #9ea145;
		--color-five: #d2bbf8;
		/*display: grid;*/
		display: flex;
		flex-direction: column;
		isolation: isolate;
		position: relative;
	}
	section {
		--_shadow-color: color-mix(in oklab, var(--_bg), black 10%);
		/*border-block-start: 1px solid var(--_bg);*/
		background-color: var(--color-one);

		> .container {
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: var(--color-one);
			isolation: isolate;
		}
		&.one {
			height: 100vh;
			position: absolute;
			inset-block-start: 0;
			inset-inline: 0;
			/*position: sticky;*/
			/*top: 0;*/
			/*z-index: -1;*/

			> .container {
				width: 100%;
				height: 100%;
				padding-inline: 1rem;
				background-color: var(--_bg);
			}
			.hero > p {
				max-width: 600px;
				margin-inline: auto;
				margin-block-start: 2rem;
			}
		}

		&:not(.one) {
			> .container {
				display: block;
				padding-block-end: 20vh;
				transform: translateX(100%);
			}
		}
		&.observed > .container {
			/*background-color: var(--_bg);*/
			animation: getIntoView 1s linear infinite;
			animation-play-state: paused;
			animation-delay: calc(var(--scroll) * -1s);
			/* Cover overshoot weirdness */
			animation-iteration-count: 1;
			animation-fill-mode: both;
		}

		.section-intro {
			/*width: 100%;*/
			height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
			/*padding-block: 60lvh;*/
			background-color: var(--_bg);
			position: sticky;
			top: 0;
			z-index: -1;
		}
		.section-content {
			height: 100vh;
			padding-block: 30vh;
			padding-inline: 1rem;
			background-color: var(--color-one);
			box-shadow: 0 -5vh 5vh 10px color-mix(in oklab, black, transparent 90%);
			margin-block-start: 50vh;
			z-index: 1;

			> p {
				max-width: 600px;
				margin-inline: auto;
				margin-block: 1.5em;
			}
		}
		.section-cta {
			margin-block-start: -30vh;

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

	@keyframes getIntoView {
		0% {
			transform: translateX(100%);
			/*box-shadow: -30px 0 0 2rem color-mix(in oklab, var(--_shadow-color), transparent);*/
			/*box-shadow: -30px 0 0 2rem var(--_shadow-color);*/
		}
		20% {
			transform: translateX(0);
			/*box-shadow: 0px 0 0 2rem color-mix(in oklab, var(--_shadow-color), transparent);*/
			/*box-shadow: 0px 0 0 2rem var(--_shadow-color);*/
		}
		80%,
		100% {
			transform: translateX(0);
		}
		/*100% {
			transform: translateX(-100%);
		}*/
	}
</style>
