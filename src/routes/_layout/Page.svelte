<div class="page">
  <header class="header">
    <span>Cotowali</span>
    <nav>
    </nav>
  </header>

  <div class="content">
    hello layout
    <slot></slot>
  </div>
</div>

<style>
  .page {
    @apply min-h-full
  }
  .header {
    @apply w-full flex shadow fixed h-12
  }
  .content {
    @apply pt-12
  }
</style>
