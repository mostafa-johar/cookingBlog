<script setup lang="ts">
 defineProps(['title'])
</script>
<template>
    <div class="title_recipe flex justify-between items-center gap-2">

        <h3 class="text-lg text-gray-950 font-bold">{{ title }} Recipes</h3>
        <span v-if="title !== 'Latest'">
            <nuxt-link :to="`/viewMore/${title}`" class="text-sm underline font-bold text-gray-950">view
                More</nuxt-link>
        </span>
    </div>
</template>