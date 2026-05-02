<script lang="ts">
	// Please read this article: https://robbowen.digital/wrote-about/css-blend-mode-shaders/ for more context
</script>

<div class="wrapper">
	<div class="shader">
		<img src="/pexels-anna-shakhrai.jpg" alt="" />
		<div class="layer specular">
			<div class="layer mask"></div>
		</div>
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
		height: 100%;
		overflow: auto;
		padding: 24px;
	}
	.shader {
		position: relative;
		overflow: hidden;
		backface-visibility: hidden; /* to force GPU performance. More on that later */
	}

	.layer {
		background: black;
		position: absolute;
		inset-inline-start: 0;
		inset-block-start: 0;
		width: 640px; /* same width as image */
		height: 100%;
		background-size: 100%;
		/*display: none;*/

		&.specular {
			--_sample-gradient-1: radial-gradient(circle at 0 0, orange 20%, red, blue 40%, black 60%);
			--_sample-gradient-2: radial-gradient(circle at 0 0, orange 30%, black 60%);
			mix-blend-mode: multiply;
			background-image: var(--_sample-gradient-1);
			background-attachment: fixed;
		}

		&.mask {
			opacity: 0;
		}
	}
</style>
