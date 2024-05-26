<script setup lang="ts">
// --- import ---
import { useStore } from "~/store/store";
const store = useStore();

// --- States from `store.ts` ----
const { exploreLatest } = storeToRefs(store);
// --- functions from `store.ts` ----
const { getImgPath } = store;

// --- title url ----
useHead({
  title: "Latest Recipe",
});
</script>
<template>
  <section class="explore-latest py-5 px-3">
    <!-- breadcrumbs -->
    <ul class="flex py-3">
      <li
        v-for="(link, index) in ['Home', 'view-all']"
        :key="index"
        class="text-sm font-medium"
        :class="`${link == 'Home' ? 'text-black' : 'text-gray-500'}`"
      >
        <nuxt-link :to="`/${link == 'Home' ? '' : link}`">{{ link }}</nuxt-link>
        <span v-if="link == 'Home'" class="mx-1">/</span>
      </li>
    </ul>
    <!-- boc-latest -->
    <div class="box_latest grid md:grid-cols-3 grid-cols-3 gap-2">
      <!-- box -->
      <nuxt-link
        :to="`/latestRecipe/${food.slug}`"
        class="flex flex-col gap-2 hover:scale-[1.1] transition-all"
        v-for="(food, index) in exploreLatest"
        :key="food.title"
      >
        <div
          class="box_img border-2 rounded-md h-auto max-h-[150px] flex justify-center items-center overflow-hidden shadow-md"
        >
          <img
            :src="getImgPath(food.img)"
            :alt="food.title"
            loading="lazy"
            class="object-cover"
          />
        </div>
        <p class="text-center text-[10px] font-bold capitalize">
          {{ food.title }}
        </p>
      </nuxt-link>
    </div>
  </section>
</template>
