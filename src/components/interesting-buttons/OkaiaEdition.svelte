<script lang="ts">
</script>

<!-- @component
This button was stolen from https://www.okaia.nl
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
  padding: 16px 60px;
  border-radius: 24px;
  border: none;
  background: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    width: 20px;
    height: auto;
    aspect-ratio: 1;
    border-radius: 50%;
    background: black;
    position: absolute;
    inset-inline-start: 40px;
  }

  & > .text {
    transform: translateX(12px);
  }

  &:is(:hover, :focus) {
    &::before {
      transform: scale(2000%);
    }
    & > .text {
      color: white;
      transform: translateX(0);
    }
  }
}

</style>