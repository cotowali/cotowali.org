<div class="page">
  <header class="header">
    <div class="flex items-center">
      <span>Cotowali</span>
    </div>
    <nav>
      <ul class="flex h-full">
        <li><a class="h-full flex items-center">Guide</a></li>
        <li><a class="h-full flex items-center">GitHub</a></li>
      </ul>
    </nav>
  </header>

  <div class="content">
    hello layout
    <slot></slot>
    <span class="border inline-block align-bottom h-24">XXXX</span>
  </div>
</div>

<style>
  .page {
    @apply min-h-full;
  }
  .header {
    @apply flex items-stretch fixed w-full h-12;
    @apply shadow;
  }
  .header-item{
    @apply h-12 inline-block align-middle leading-none;
  }
  .content {
    @apply pt-12;
  }
</style>
