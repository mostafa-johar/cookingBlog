<script setup lang="ts">
import { useStore } from "~/store/store";
const store = useStore();

// --- functions from `store.ts` ----
const { getImgPath, filterCategories } = store;

// ----- valiabls from `index.vue` -------
defineProps(["title"]);
const limitNum = ref(5);
</script>
<template>
  <div class="grid md:grid-cols-5 grid-cols-3 gap-3">
    <!-- box -->
    <nuxt-link
      :to="`/latestRecipe/${food.slug}`"
      class="flex flex-col gap-3 hover:scale-[1.1] transition-all"
      v-for="(food, index) in filterCategories(title)"
      :key="food.title"
    >
      <span v-if="index < limitNum" class="flex flex-col gap-3">
        <div
          class="border-2 rounded-md h-auto max-h-[500px] flex justify-center items-center overflow-hidden shadow-md"
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
      </span>
    </nuxt-link>
  </div>
</template>
