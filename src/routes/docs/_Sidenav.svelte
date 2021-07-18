<script>
  export let entries
</script>

<div class="pr-40 min-h-full shadow">
  <nav class="fixed w-40 pt-6">
    <ul>
      {#each entries as { metadata: { title, path: href } }}
        <li><a {href} class="hover:bg-dark-darken-1 px-6 block">{title}</a></li>
      {/each}
  </nav>
</div>
