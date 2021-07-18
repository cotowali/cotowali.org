<script>
  export let entries
</script>

<nav>
  <ul>
    {#each entries as entry}
      <li>{entry.metadata.title}</li>
    {/each}
</nav>
