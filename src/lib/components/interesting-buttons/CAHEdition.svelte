<script lang="ts">
</script>

<!-- @component
This button was heavily inspired (and stolen from) https://www.cahsuesmusk.com
 -->
<button class="button">
  <div class="text">
    <span>Button</span>
  </div>
</button>

<style>
.button {
  isolation: isolate;
  color: black;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 60px;
  border-radius: 9999rem;
  border: 2px solid white;
  background: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: "Button";
    opacity: 0;
  }

  & > .text {
    position: absolute;
  }

  &:is(:hover, :focus) {
    background: transparent;

    & > .text {
      color: white;
      scale: 1.3;
      transition: scale 200ms ease-out;
    }
  }
}

</style>