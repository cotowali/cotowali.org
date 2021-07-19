<script>
  export let entries
</script>

<div class="pr-40 min-h-full shadow">
  <nav class="fixed w-40 pt-6">
    <ul>
      {#each entries as { metadata: { title, path, toc} }}
        <li><a href={path} class="hover:bg-dark-darken-1 px-6 block">{title}</a></li>
        {#if toc.length > 0}
          <ul class="px-8">
            {#each toc as tocItem}
              <li><a href={path + tocItem.href}>{tocItem.value}</a></li>
            {/each}
          </ul>
        {/if}
      {/each}
  </nav>
</div>
