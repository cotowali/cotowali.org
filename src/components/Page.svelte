<script>
  const navs = [
    { text: 'Docs', href: '/docs' },
    {
      text: 'GitHub',
      href: 'https://github.com/cotowali/cotowali',
      target: '_blank',
      rel: 'external',
    },
  ]
</script>

<header class="header">
  <div class="flex items-center">
    <span>Cotowali</span>
  </div>
  <nav>
    <ul class="flex h-full">
      {#each navs as { text, href, ...attrs} }
        <li><a class="nav-item-anchor hover:bg-brand-red-lighten-1" {href} {...attrs}>{text}</a></li>
      {/each}
    </ul>
  </nav>
</header>

<div class="page">
  {#if $$slots.sidenav }
    <slot name="sidenav" />
  {/if}
  <div class="content">
    <main>
      <slot></slot>
    </main>

    <footer class="footer">
      <p class="text-sm">
      Copyright &copy; 2021 The Cotowali Authors
      </p>
    </footer>
  </div>
</div>

<style>
  :global(body) {
    @apply text-white;
  }
  .page {
    @apply flex justify-between;
    @apply min-h-full w-full;
    @apply bg-dark;
    @apply pt-12;
  }
  .header {
    @apply flex justify-between;
    @apply fixed w-full h-12;
    @apply px-4;
    @apply bg-brand-red shadow;
  }
  .content {
    @apply flex flex-col justify-between;
    @apply flex-grow;
  }
  .footer {
    @apply text-center;
    @apply p-4;
  }
  .nav-item-anchor {
    @apply h-full flex items-center; /* align text middle */
    @apply px-2;
  }
</style>
