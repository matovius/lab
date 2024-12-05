<script lang="ts">
	import CahEdition from "./CAHEdition.svelte";
	import NullGamesEdition from "./NullGamesEdition.svelte";
	import OkaiaEdition from "./OkaiaEdition.svelte";

</script>

<div class="all-buttons">
  <div class="button-wrapper">
    <CahEdition />
  </div>
  <div class="button-wrapper">
    <NullGamesEdition />
  </div>
  <div class="button-wrapper">
    <OkaiaEdition />
  </div>
</div>

<style>
  .all-buttons {
    width: 100dvw;
    height: 100dvh;
    overflow-x: hidden;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
  }
  .button-wrapper {
    width: 100%;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-snap-align: center;
  }
</style>