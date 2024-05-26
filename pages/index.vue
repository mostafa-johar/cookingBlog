<script setup lang="ts">
import { useStore } from "~/store/store";
const store = useStore();

// --- States from `store.ts` ----
const { viewAll } = storeToRefs(store);

// --- title url ----
useHead({
  title: "Recipe HomePage",
});
</script>

<template>
  <article class="homePage py-5 px-5">
    <!-------------------- 
            -- Start info
            ----------------->
    <InfoRecipe />

    <!-------------------- 
            -- Start Country Food
            ----------------->
    <Country-Food :categoryFood="viewAll" />

    <!-------------------- 
            -- Start latest Recipe
            ----------------->
    <section class="latest_recipe py-5">
      <div class="flex flex-col gap-3">
        <!-- title -->
        <recipe-title title="Latest" />

        <!-- categories -->
        <LatestRecipe />
      </div>
    </section>
    <!-------------------- 
            -- Start ['Thai','American','Chinese'] Recipe
            ----------------->
    <section
      :class="`${name} py-5`"
      v-for="(name, index) in ['Thai', 'American', 'Chinese']"
      :key="index"
    >
      <div class="flex flex-col gap-3">
        <!-- title -->
        <recipe-title :title="name" />
        <!-- categories -->
        <Recipe :title="name" />
      </div>
    </section>

    <!-------------------- 
            -- Start Publish Recipe
            ----------------->
    <PublishRecipe />
  </article>
</template>
