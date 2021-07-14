<div class="page">
  <header class="header">
    <span>Cotowali</span>
    <nav>
    </nav>
  </header>

  <div>
    hello layout
    <slot></slot>
  </div>
</div>

<style>
  .page {
    @apply min-h-full
  }
  .header {
    @apply flex shadow;
  }
</style>
