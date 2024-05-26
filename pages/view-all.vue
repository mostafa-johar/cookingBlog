<script setup lang="ts">
import { useStore } from "~/store/store";
const store = useStore();

// --- States from `store.ts` ----
const { viewAll } = storeToRefs(store);
// -- actions
const { getImgPath } = store;
// --- title url ----
useHead({
  title: "Recipe ViewAll",
});
</script>
<template>
  <section class="viewAll py-5 px-3">
    <section class="countryFood py-5">
      <div class="box_food flex justify-center flex-wrap items-center gap-2">
        <!-- box -->
        <nuxt-link
          :to="`/countryFood/${food.title}`"
          class="flex flex-col gap-2 hover:scale-[1.1] transition-all"
          v-for="(food, index) in viewAll"
          :key="food.title"
          v-show="food.title !== 'View All'"
        >
          <div
            class="border-2 rounded-md h-[70px] flex justify-center items-center overflow-hidden shadow-md"
          >
            <img
              :src="getImgPath(food.img)"
              :alt="food.title"
              loading="lazy"
              class="object-cover"
            />
          </div>
          <p class="text-center text-[12px] font-medium capitalize">
            {{ food.title }}
          </p>
        </nuxt-link>
      </div>
    </section>
  </section>
</template>
