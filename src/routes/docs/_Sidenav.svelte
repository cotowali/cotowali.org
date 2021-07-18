<script>
  export let entries
</script>

<div class="pr-40 min-h-full shadow">
  <nav class="fixed w-40 p-6">
    <ul>
      {#each entries as entry}
        <li>{entry.metadata.title}</li>
      {/each}
  </nav>
</div>
