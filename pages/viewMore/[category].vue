<script setup lang="ts">
import { useStore } from "../../store/store";
import { useRoute } from "vue-router";
const store = useStore();

const route = useRoute();
const category = route.params.category;

// --- functions from `store.ts` ----
const { getImgPath, filterCategories } = store;
// --- title url ----
useHead({
  title: `${category} Recipe`,
});
</script>
<template>
  <section class="py-3 px-5">
    <h3 class="text-lg font-bold mb-3">{{ category }} Category :</h3>
    <div class="flex items-center justify-center flex-wrap gap-2">
      <!-- box -->
      <nuxt-link
        :to="`/latestRecipe/${food.slug}`"
        class="flex flex-col gap-2 hover:scale-[1.1] transition-all"
        v-for="(food, index) in filterCategories(category as string)"
        :key="food.title"
      >
        <span>
          <div
            class="border-2 rounded-md h-auto max-h-[200px] w-[300px] flex justify-center items-center overflow-hidden shadow-md"
          >
            <img
              :src="getImgPath(food.img)"
              :alt="food.title"
              loading="lazy"
              class="object-cover"
            />
          </div>
          <p class="text-center text-sm font-bold capitalize">
            {{ food.title }}
          </p>
        </span>
      </nuxt-link>
    </div>
  </section>
</template>
