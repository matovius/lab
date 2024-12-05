<script lang="ts">
  let coordinates = $state({
    x: 0,
    y: 0,
  });

  function trackMouse(ev: MouseEvent) {
    coordinates = {
      x: ev.clientX,
      y: ev.clientY
    }
  }
</script>

<svelte:document onmousemove={trackMouse} />

<div class="container">
  <span
    style="
      mask-image: radial-gradient(circle 360px at {coordinates.x}px {coordinates.y}px, white 20%, transparent);
      background-image: radial-gradient(circle 360px at {coordinates.x}px {coordinates.y}px, #FF4141 0%, #FFC850 25%, #00B4FF 50%, #501EB4 70%, #220C4D 100%)">
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
    This is a mask
  </span>
</div>


<style>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    mask: radial-gradient(ellipse at center, white 5%, transparent 70%);

    & > span {
      color: transparent;
      font-size: 24px;
      font-family: var(--font-martian);
      line-height: 1;
      user-select: none;
      text-transform: uppercase;
      background-clip: text;
      line-break: anywhere;
    }
  }
</style>
