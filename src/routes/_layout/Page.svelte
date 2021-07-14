<script>
  const navs = [
    { text: 'Guilde', href: '/guide'},
    { text: 'GitHub', href: 'https://github.com/cotowali/cotowali', target: '_blank'},
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
          <li><a class="nav-item-anchor" {href} {...attrs}>{text}</a></li>
        {/each}
      </ul>
    </nav>
  </header>

  <div class="content">
    <slot></slot>
  </div>
</div>

<style>
  .page {
    @apply min-h-full;
  }
  .header {
    @apply flex justify-between;
    @apply fixed w-full h-12;
    @apply px-4;
    @apply shadow;
  }
  .nav-item-anchor {
    @apply h-full flex items-center; /* align text middle */
    @apply px-2;
  }
  .content {
    @apply pt-12;
  }
</style>
