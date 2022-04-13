<template>
  <div class="sponsors">
    <h1 class="text-3xl text-brand-red">Suponsors</h1>
    <div class="mt-4">
      <LiSponsor
        v-for="sponsor in sponsors"
        :key="sponsor.name"
        :name="sponsor.name"
        :image="sponsor.image"
        :url="sponsor.url"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LiSponsors',
  data: () => ({
    sponsors: [{
      name: 'CubeSoft, Inc.',
      image: 'https://raw.githubusercontent.com/cube-soft/Cube.Core/master/Icon.svg',
      url: 'https://www.cube-soft.jp/',
    }],
  }),
})
</script>


<style scoped>
.hero {
  @apply flex justify-center items-center;
  @apply gap-x-16 py-24;
}
</style>
