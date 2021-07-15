<script>
  import logo from '@cotowali/design/assets/cotowali.svg'
</script>

<div class="hero">
  <div class="flex flex-col">
    <h1 class="text-main text-4xl">Cotowali</h1>
    <div class="mt-1 px-[3px]">
      <p>A statically typed script language that transpile into POSIX sh</p>
    </div>
  </div>
  <img src={logo} class="h-60">
</div>

<style>
  .hero {
    @apply flex justify-center items-center;
    @apply gap-x-16 py-24;
  }
</style>
