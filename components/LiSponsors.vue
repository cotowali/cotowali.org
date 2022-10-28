<template>
  <div>
    <div>
      <h1 class="text-3xl text-brand-red">Suponsors</h1>
      <div class="mt-4 flex gap-4">
        <LiSponsor
          v-for="sponsor in sponsors"
          :key="sponsor.name"
          :name="sponsor.name"
          :image="sponsor.image"
          :url="sponsor.url"
        />
      </div>
    </div>
    <div class="mt-6">
      <h1 class="text-xl text-brand-red">Personal Silver Suponsors</h1>
      <div class="mt-4 flex gap-4">
        <LiSponsor
          v-for="sponsor in personalSilverSponsors"
          :key="sponsor.name"
          :name="sponsor.name"
          :image="sponsor.image"
          :url="sponsor.url"
          small
        />
      </div>
    </div>
    <div class="mt-6">
      <h1 class="text-xl text-brand-red">Personal Bronze Suponsors</h1>
      <div class="mt-4 flex gap-4">
        <LiSponsor
          v-for="sponsor in personalBronzeSponsors"
          :key="sponsor.name"
          :name="sponsor.name"
          :image="sponsor.image"
          :url="sponsor.url"
          small
        />
      </div>
      <div class="mt-6">
        <h1 class="text-xl text-brand-red">Personal Suponsors</h1>
        <div class="mt-4 flex gap-4">
          <LiSponsor
            v-for="sponsor in personalSponsors"
            :key="sponsor.name"
            :name="sponsor.name"
            :image="sponsor.image"
            :url="sponsor.url"
            small
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LiSponsors',
}
</script>

<script setup lang="ts">
const sponsors = [{
  name: 'CubeSoft, Inc.',
  image: 'https://raw.githubusercontent.com/cube-soft/Cube.Core/master/Icon.svg',
  url: 'https://www.cube-soft.jp/',
}]

const personalSilverSponsors = [{
  name: 'takesako',
  image: 'https://github.com/takesako.png',
  url: 'https://github.com/takesako',
}, {
  name: 'orisano',
  image: 'https://github.com/orisano.png',
  url: 'https://github.com/orisano',
}]

const personalBronzeSponsors = [{
  name: 'Krouton',
  image: 'https://github.com/Krout0n.png',
  url: 'https://github.com/Krout0n',
}, {
  name: 'Kazuki Chigita',
  image: 'https://pbs.twimg.com/profile_images/1480844416462225409/aiBGMxvt.jpg',
  url: 'https://kazuki.chigita.net/profile',
}]

const personalSponsors = [{
  name: 'くろぐろ',
  image: 'https://github.com/k-kuroguro.png',
  url: 'https://twitter.com/k_kuroguro',
}]
</script>
