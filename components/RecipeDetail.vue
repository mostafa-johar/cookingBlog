<script setup lang="ts">
// import
import { useStore } from "~/store/store";
const store = useStore();

// --- Route from url---
const route = useRoute();
const { slug } = route.params;

// ----- valiabls from `index.vue` -------
const props = defineProps(["recipeList"]);

// --- functions from `store.ts` ----
const { getImgPath } = store;

const filterLatestRecipe = computed(() => {
  return [...props.recipeList].filter((item) => {
    return item.slug == slug;
  });
});
useHead({
  title: `${slug}`,
});
</script>
<template>
  <!-- details -->
  <section
    class="flex gap-3 md:flex-row flex-col"
    v-for="item in filterLatestRecipe"
    :key="item.title"
  >
    <!-- left img -->
    <div class="m-auto">
      <img
        :src="getImgPath(item.img)"
        :alt="item.title"
        class="max-w-full max-h-[500px]"
      />
    </div>
    <!-- right info -->
    <div class="flex-1 flex flex-col gap-2">
      <div>
        <h3 class="text-xl font-bold text-gray-950">{{ item.title }}</h3>
        <p class="text-sm text-gray-400">📍{{ item.category }}</p>
      </div>
      <p class="text-sm text-gray-950">
        {{ item.description }}
      </p>
      <div>
        <span class="mr-1 text-gray-950 font-bold text-sm">Source:</span>
        <a
          href="https://www.jamieoliver.com/recipes/seafood-recipes/thai-style-mussels/"
          class="text-[12px] text-blue-600"
          target="_blank"
          >{{ item.Source }}</a
        >
      </div>
      <ul>
        <h4 class="text-lg text-gray-950 font-medium">Ingredients</h4>
        <li
          v-for="(ingredient, index) in item.ingredients"
          :key="index"
          class="text-[13px] text-gray-950 font-medium border-b-[1px] py-1"
        >
          {{ ingredient }}
        </li>
      </ul>
    </div>
  </section>
</template>
