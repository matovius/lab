<script lang="ts">
</script>

<!-- @component
This button was stolen from [Null Games](https://null.com).
Weirdly, their buttons seem a little unperformant, and mine works perfectly.
So I don't know what they're doing to make them like that.
 -->
<button class="button">
  <div class="text">
    <span>Button</span>
  </div>
</button>

<style>
  .button {
    color: black;
    font-size: 24px;
    line-height: 1;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 96px;
    border-radius: 9999rem;
    overflow: hidden;
    position: relative;

    &::before {
      content: "";
      width: 150%;
      aspect-ratio: 1;
      background: linear-gradient(90deg, color-mix(in oklab, red, white 20%) 50%, color-mix(in oklab, blue, white 20%) 50%);
      position: absolute;
      z-index: -1;
      animation: rotateAbout 5000ms linear infinite;
    }

    & > .text {
      &::before {
        content: "";
        border-radius: 9999rem;
        background: white;
        position: absolute;
        inset: 0;
        z-index: -1;
      }
    }

    &:hover > .text::before {
      inset: 10px;
      transition-delay: 200ms;
    }
  }

  @keyframes rotateAbout {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>