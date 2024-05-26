<script setup>
import { useStore } from "~/store/store";
const store = useStore();

// --- functions from `store.ts` ----
const { AllCategories } = store;
// --- title url ----
</script>
<template>
  <section class="detailFood py-5 px-5">
    <div class="flex flex-col gap-3">
      <!-- breadcrumbs -->
      <ul class="flex py-3">
        <li
          v-for="(link, index) in ['Home', 'view-all']"
          :key="index"
          class="text-sm font-medium"
          :class="`${link == 'Home' ? 'text-black' : 'text-gray-500'}`"
        >
          <nuxt-link :to="`/${link == 'Home' ? '' : link}`">{{
            link
          }}</nuxt-link>
          <span v-if="link == 'Home'" class="mx-1">/</span>
        </li>
      </ul>

      <!-- details -->
      <recipe-detail :recipeList="AllCategories" />
    </div>
  </section>
</template>
