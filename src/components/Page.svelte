<script>
  const navs = [
    { text: 'Docs', href: '/docs' },
    { text: 'GitHub', href: 'https://github.com/cotowali/cotowali', target: '_blank' },
  ]
</script>

<div class="page">
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

  <div class="content mh-full">
    <slot></slot>
  </div>

  <footer class="footer">
    Copyright &copy; 2021 The Cotowali Authors. All rights reserved.
  </footer>
</div>

<style>
  .page {
    @apply flex flex-col justify-between;
    @apply min-h-full;
    @apply bg-dark;
    @apply text-white;
  }
  .header {
    @apply flex justify-between;
    @apply fixed w-full h-12;
    @apply px-4;
    @apply bg-brand-red shadow;
  }
  .footer {
    @apply text-center;
    @apply p-4;
  }
  .nav-item-anchor {
    @apply h-full flex items-center; /* align text middle */
    @apply px-2;
  }
  .content {
    @apply pt-12;
  }
</style>
