<template>
  <header
    class="header"
    v-bind="$attrs"
  >
    <div class="flex items-center">
      <nuxt-link :to="localePath('/')">
        <CotowaliLogoText />
      </nuxt-link>
    </div>
    <nav>
      <ul class="nav-list">
        <li>
          <LiButton
            small
            :to="localePath('/docs/getting-started')"
          >
            Docs
          </LiButton>
        </li>
        <li><LiLanguageSwitcher /></li>
        <li>
          <LiButton
            small
            circle
            icon
            href="https://github.com/cotowali/cotowali"
            target="_blank"
            rel="external noopener noreferrer"
          >
            <LiIcon
              label="github"
              name="github"
            />
          </LiButton>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  @apply flex justify-between items-center;
  @apply fixed z-front w-full h-header-height;
  @apply px-4;
  @apply bg-brand-red;
}

.nav-list {
  @apply flex items-center gap-x-2;
}
</style>
