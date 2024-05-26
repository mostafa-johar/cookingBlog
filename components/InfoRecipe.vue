<script setup lang="ts">
// --- import ---
import { useStore } from "~/store/store";
const store = useStore();

// --- functions from `store.ts` ----
const { getImgPath } = store;
</script>
<template>
  <section class="flex items-center justify-between gap-3 py-5">
    <!-- left info -->
    <section class="flex flex-col gap-3 flex-1">
      <h3 class="md:text-3xl text-xl font-bold">
        Huge selection of delucious recipe ideas
      </h3>
      <p class="text-gray-500">
        Explore our huge selection of delicious recipe ideas including; easy
        desserts, delicious vegan and vegetarian dinner ideas, gorgeous pasta
        recipes, quick bakes, family-friendly meals and gluten-free recipes.
      </p>
      <div class="flex gap-2">
        <nuxt-link
          to="/explore-latest"
          class="text-white bg-black rounded-md px-[10px] py-[10px]"
          >Explore Latest</nuxt-link
        >
        <nuxt-link
          to="/explore-random"
          class="rounded-md shadow-sm shadow-gray-400 px-[10px] py-[10px]"
          >Show Random</nuxt-link
        >
      </div>
    </section>

    <!-- right img -->
    <section class="flex-1 justify-center md:flex hidden">
      <img
        :src="getImgPath('hero-image.png')"
        alt="hero-image"
        loading="lazy"
        width="400"
        height="500"
      />
    </section>
  </section>
</template>
