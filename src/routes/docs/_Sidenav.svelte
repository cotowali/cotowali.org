<script>
  export let entries
</script>

<div class="pr-40">
  <nav class="fixed w-40">
    <ul>
      {#each entries as entry}
        <li>{entry.metadata.title}</li>
      {/each}
  </nav>
</div>
