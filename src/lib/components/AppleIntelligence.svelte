<div class="text">Apple Intelligence</div>

<style>
  .text {
    isolation: isolate;
    font-family: var(--font-inter);
    font-weight: 600;
    font-size: 48px;
    color: color-mix(in oklab, white, transparent 5%);
    background-clip: text;
    user-select: none;
    position: relative;

    &::before {
      content: "Apple Intelligence";
      color: transparent;
      background: linear-gradient(to right,
        color-mix(in oklab, #00ccff, white 20%),
        color-mix(in oklab, #0033ff, white 20%),
        color-mix(in oklab, #9900ff, white 20%),
        color-mix(in oklab, #ff00ff, white 20%),
        color-mix(in oklab, #ff0037, white 20%),
        color-mix(in oklab, #ff0000, white 20%),
        color-mix(in oklab, #ffae00, white 20%));
      background-clip: text;
      filter: blur(12px);
      position: absolute;
      inset: 0;
      z-index: -1;
      /* animation: pulse 2000ms ease-in-out alternate infinite; */
    }
  }

  @keyframes pulse {
    from {
      opacity: 0.8;
    }
    to {
      opacity: 1;
    }
  }
</style>