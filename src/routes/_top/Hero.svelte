<script>
  import logo from '@cotowali/design/assets/cotowali.svg'
  import Button from '$components/Button.svelte'
</script>

<div class="hero">
  <div class="flex flex-col">
    <h1 class="text-brand-red text-4xl">Cotowali</h1>
    <div class="mt-1 px-[3px]">
      <p>A statically typed script language that transpile into POSIX sh</p>
    </div>
    <div class="mt-5">
      <Button class="bg-brand-red" href="/docs/getting-started">Get Strated</Button>
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
