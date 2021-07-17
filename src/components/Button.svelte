<script>
  export let type = 'button'
  export let href

  let passedClass
  export { passedClass as class }

  let baseClass = 'button'
  $: className = `${baseClass} ${passedClass}`
  $: tag = href && 'a' || 'button'
</script>

{#if tag === 'a'}
  <a class="{className}" {href} {...$$restProps}><slot /></a>
{:else}
  <button class="{className}" {type} {...$$restProps}><slot/></button>
{/if}

<style>
  .button {
    @apply px-6 py-3;
    @apply shadow;
  }
</style>
