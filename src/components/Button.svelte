<script>
  export let type = 'button'
  export let href

  $: classNames = 'button'
  $: tag = href && 'a' || 'button'
</script>

{#if tag === 'a'}
  <a class="{classNames}" {href} {...$$restProps}><slot /></a>
{:else}
  <button class="{classNames}" {type} {...$$restProps}><slot/></button>
{/if}

<style>
  .button {
    @apply shadow;
  }
</style>
