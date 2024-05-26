<script setup lang="ts">
// --- import ---
import { useStore } from '~/store/store';
const store = useStore()

// --- States from `store.ts` ----
const { exploreRandom } = storeToRefs(store)

// --- functions from `store.ts` ----
const { getImgPath } = store

// --- title url ----
useHead({
    title: "Random Recipe",
});
</script>
<template>
    <section class="detailFood py-5 px-5">
        <div class="flex flex-col gap-3">

            <!-- details -->
            <section class="flex gap-3 md:flex-row flex-col ">
                <!-- left img -->
                <div class="m-auto" >
                    <img :src="getImgPath(exploreRandom.img)" :alt="exploreRandom.title"
                        class="max-w-full max-h-[500px]">
                </div>
                <!-- right info -->
                <div class="flex-1 flex flex-col gap-2">
                    <div>
                        <h3 class="text-xl font-bold text-gray-950">{{ exploreRandom.title }}</h3>
                        <p class="text-sm text-gray-400">📍{{ exploreRandom.category  }}</p>
                    </div>
                    <p class="text-sm text-gray-950 ">
                        {{ exploreRandom.description }}
                    </p>
                    <div>
                        <span class="mr-1 text-gray-950 font-bold text-sm">Source:</span>
                        <a href="https://www.jamieoliver.com/recipes/seafood-recipes/thai-style-mussels/"
                            class="text-[12px] text-blue-600" target="_blank">{{ exploreRandom.Source }}</a>
                    </div>
                    <ul>
                        <h4 class="text-lg text-gray-950 font-medium">Ingredients</h4>
                        <li v-for="(ingredient, index) in exploreRandom.ingredients" :key="index"
                            class="text-[13px] text-gray-950 font-medium border-b-[1px] py-1">{{ ingredient }}</li>
                    </ul>
                </div>
            </section>

        </div>
    </section>
</template>