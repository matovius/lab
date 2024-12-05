<script lang="ts">
  import "@fontsource-variable/inter";
  import "@fontsource-variable/martian-mono";
  import "../styles/app.css";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

{@render children?.()}
