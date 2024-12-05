<script lang="ts">
  let cards = [
    {
      name: "Card #1"
    },
    {
      name: "Card #2"
    },
    {
      name: "Card #3"
    },
    {
      name: "Card #4"
    },
    {
      name: "Card #5"
    },
    {
      name: "Card #6"
    },
    {
      name: "Card #7"
    },
    {
      name: "Card #8"
    },
    {
      name: "Card #9"
    },
    {
      name: "Card #10"
    }
  ];
</script>

<div class="plane">
  {#each cards as card, index}
    <div class="card" style="--_rotation: calc({30 / cards.length}s * {index + 1})">
      <span>{card.name}</span>
    </div>
  {/each}
</div>

<style>
  .plane {
    width: 100dvw;
    height: 100dvh;
    isolation: isolate;
    perspective: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card {
    color: black;
    width: 240px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    position: absolute;
    transform: rotateX(0deg);
    transform-origin: bottom;
    animation-name: swivel;
    animation-duration: 30s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-delay: var(--_rotation);
  }

  @keyframes swivel {
    0%, 100% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(360deg);
    }
  }
</style>