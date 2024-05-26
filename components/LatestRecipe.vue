<script setup lang="ts">
// --- import ---
import { useStore } from "~/store/store";
const store = useStore();

// --- States from `store.ts` ----
const { exploreLatest } = storeToRefs(store);
// --- functions from `store.ts` ----
const { getImgPath } = store;
</script>

<template>
  <div class="box_latest grid md:grid-cols-5 grid-cols-3 gap-1">
    <!-- box -->
    <nuxt-link
      :to="`/latestRecipe/${food.slug}`"
      class="flex flex-col gap-3 hover:scale-[1.1] transition-all"
      v-for="(food, index) in exploreLatest"
      :key="food.title"
    >
      <div
        class="box_img border-2 rounded-md h-auto max-h-[500px] flex justify-center items-center overflow-hidden shadow-md"
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
</template>
