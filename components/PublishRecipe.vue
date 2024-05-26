<script setup lang="ts">
// --- import ---
import { useStore } from "~/store/store";
const store = useStore();

// --- functions from `store.ts` ----
const { getImgPath } = store;
</script>
<template>
  <section class="publish_recipe py-5 px-3">
    <div class="flex flex-col justify-center items-center gap-5">
      <!-- img -->
      <div class="clients flex justify-center items-center">
        <img
          :src="getImgPath('publish-recipe.png')"
          alt="publish-recipe.png"
          class="max-w-full"
        />
      </div>

      <!-- info -->
      <div class="flex flex-col justify-center items-center gap-1">
        <h3 class="text-gray-950 md:text-3xl text-xl font-bold">
          Publish your recipe for Free today
        </h3>
        <p class="text-sm text-gray-500">
          publish your recipe in front of thounsands of people for free
        </p>
        <nuxt-link
          to="/RecipeForm"
          class="text-white bg-black rounded-md px-[15px] py-[10px] mt-2"
        >
          Submit Recipe
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
