<template>
  <div v-scroll-id="'section-sponsors'">
    <div>
      <h1
        v-scroll-id="'sponsors'"
        class="text-3xl text-brand-red"
      >
        Sponsors
      </h1>
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
      <h1
        v-scroll-id="'personal-silver-sponsors'"
        class="text-xl text-brand-red"
      >
        Personal Silver Sponsors
      </h1>
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
      <h1
        v-scroll-id="'personal-bronze-sponsors'"
        class="text-xl text-brand-red"
      >
        Personal Bronze Sponsors
      </h1>
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
        <h1
          v-scroll-id="'personal-sponsors'"
          class="text-xl text-brand-red"
        >
          Personal Sponsors
        </h1>
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

<script setup lang="ts">
import {
  sponsors,
  personalSponsors,
  personalBronzeSponsors,
  personalSilverSponsors,
} from '@/sponsors'
</script>
