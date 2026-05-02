<script>
	import { onDestroy, onMount } from 'svelte';
	import dayjs from 'dayjs';

	/** @type { HTMLInputElement } */
	let videoPicker;
	/** @type { HTMLCanvasElement } */
	let playerCanvas;
	/** @type { CanvasRenderingContext2D | null } */
	let ctx;
	/** @type { File | null } */
	let videoFile = $state(null);
	// $inspect(videoFile);
	/** @type { HTMLVideoElement | null } */
	let video = $state(null);
	let videoScale = $state(1);
	let videoAspectRatio = $state(1);
	let isVideoPlaying = $state(false);
	let isVideoMuted = $state(false);
	let videoDuration = $state(0);
	let videoCurrentTime = $state(0);
	// $inspect(videoScale);
	// $inspect(videoAspectRatio);
	// $inspect(video);
	// $inspect(videoCurrentTime);

	/** @type { (ev: Event) => void } */
	function readyToPlay(ev) {
		if (video) {
			videoDuration = video.duration * 1000;
			videoCurrentTime = Math.round(video.currentTime * 1000);
			videoAspectRatio = video.videoWidth / video.videoHeight;
			playerCanvas.height = playerCanvas.width / videoAspectRatio;
			videoScale = Math.min(
				playerCanvas.width / video.videoWidth,
				playerCanvas.height / video.videoHeight
			);
			// console.log('Video duration: ', videoDuration);
			// console.log('Video current time: ', videoCurrentTime);

			startCanvas();
		}
	}

	function updateCanvas() {
		if (ctx) {
			ctx.clearRect(0, 0, playerCanvas.width, playerCanvas.height);
			drawFrame(ctx);
		}
		if (video && !video.paused && !video.ended) {
			isVideoPlaying = true;
			requestAnimationFrame(updateCanvas);
		} else {
			isVideoPlaying = false;
		}
	}

	function startCanvas() {
		if (ctx) {
			ctx.clearRect(0, 0, playerCanvas.width, playerCanvas.height);
			drawFrame(ctx);
		}
	}

	/** @type { (ctx: CanvasRenderingContext2D) => void } */
	function drawFrame(ctx) {
		if (video) {
			const vidH = video.videoHeight;
			const vidW = video.videoWidth;
			const top = playerCanvas.height / 2 - (vidH / 2) * videoScale;
			const left = playerCanvas.width / 2 - (vidW / 2) * videoScale;
			videoCurrentTime = Math.round(video.currentTime * 1000);

			ctx.drawImage(video, left, top, vidW * videoScale, vidH * videoScale);
		}
	}

	function getVideo() {
		if (videoFile) {
			video = document.createElement('video');
			video.src = URL.createObjectURL(videoFile);
			video.oncanplay = readyToPlay;

			// const videoContainer = document.querySelector('div.video-container');
			// if (videoContainer) {
			// 	videoContainer.appendChild(video);
			// }
		}
	}

	function handlePlayback() {
		if (video) {
			if (video.paused) {
				video.play();
				isVideoPlaying = true;
			} else {
				video.pause();
				isVideoPlaying = false;
			}
			updateCanvas();
		}
	}

	function handleSeeking() {
		// console.log('Seeking to: ', videoCurrentTime);
		if (video) {
			video.currentTime = videoCurrentTime / 1000;
			startCanvas();
		}
	}

	function handleMuting() {
		if (video) {
			video.muted = !video.muted;
			isVideoMuted = !isVideoMuted;
		}
	}

	function handleFilePickerChange() {
		const files = videoPicker.files;

		if (files) {
			// console.log(file[0]);
			videoFile = files[0];
			getVideo();
		}
	}

	function handleFilePickerCancel() {
		console.log('File picker canceled.');
	}

	/** @type { (ev: KeyboardEvent) => void } */
	function handleKeydown(ev) {
		if (ev.key === 'p') {
			ev.preventDefault();
			handlePlayback();
		} else if (ev.key === 'f') {
			ev.preventDefault();
			videoPicker.click();
		} else if (ev.key === 'm') {
			ev.preventDefault();
			handleMuting();
		}
	}

	onMount(() => {
		if (playerCanvas) {
			ctx = playerCanvas.getContext('2d');
		}
	});

	onDestroy(() => {
		if (video) {
			URL.revokeObjectURL(video.src);
		}
	});
</script>

<svelte:head>
	<title>Video Canvas Experiment</title>
</svelte:head>

<svelte:window onkeydown={handleKeydown} />

<main>
	<div class="container">
		<div class="file-picker">
			<label for="file-input">
				<span>
					(F)
					{#if video}
						<span>Change your selected video</span>
					{:else}
						<span>Click to pick a video</span>
					{/if}
				</span>
			</label>
			<input
				type="file"
				name="file-input"
				id="file-input"
				accept="video/*"
				bind:this={videoPicker}
				onchange={handleFilePickerChange}
				oncancel={handleFilePickerCancel}
			/>
			<!-- {#if videoFile}
				<p class="video-details">Video details: {videoFile?.name}</p>
			{/if} -->
		</div>
		<div class="video-container">
			<div class="player">
				<canvas
					width="600"
					height="250"
					class="player-canvas"
					bind:this={playerCanvas}
					onclick={handlePlayback}
				></canvas>
			</div>
			<div class="playback-details">
				{#if video}
					<p>(P) {isVideoPlaying ? 'Playing' : 'Paused'}</p>
					<p>(M) {isVideoMuted ? 'Muted' : 'Not muted'}</p>
				{/if}
			</div>
			<div class="playback-tracker">
				{#if video}
					<input
						type="range"
						name="playback"
						id="playback"
						min="0"
						max={videoDuration}
						step="100"
						bind:value={videoCurrentTime}
						onchange={handleSeeking}
					/>
					<div class="timings">
						<p>{dayjs(videoCurrentTime).format('mm:ss')}</p>
						<p>{dayjs(videoDuration).format('mm:ss')}</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
</main>

<style>
	main {
		font-family: var(--font-martian);
	}
	.file-picker {
		position: relative;
		height: 10em;
		padding: 10px;

		& > label {
			text-align: center;
			display: block;
			padding-inline: 50px;
			padding-block: 20px;
			border: 2px solid black;
			cursor: pointer;
		}
		& > input[type='file'] {
			opacity: 0;
			pointer-events: none;
			position: absolute;
		}
		& > p.video-details {
			text-align: center;
		}
	}

	.video-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		& > .player {
			width: 100%;
			max-width: 600px;
		}
	}

	canvas.player-canvas {
		/*border: 2px solid black;*/
		border-radius: 1rem;
		background-color: color-mix(in oklab, black, transparent 90%);
	}

	.playback-details {
		width: 100%;
		max-width: 600px;
		padding-inline: 2em;
		padding-block-start: 1em;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 2em;
	}
	.playback-tracker {
		width: 100%;
		max-width: 600px;
		padding-inline: 2em;
		padding-block-start: 1em;
		display: grid;
		gap: 1em;

		& > .timings {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 2em;
		}
	}
</style>
