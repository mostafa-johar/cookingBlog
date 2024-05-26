<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const country = route.params.country;

useHead({
  title: `${country}`,
});
</script>
<template>
  <section class="countryFood text-bold py-3 px-5">
    <!-- breadcrumbs -->
    <ul class="flex py-3">
      <li
        v-for="(link, index) in ['Home', 'view-all']"
        :key="index"
        class="text-sm font-medium"
        :class="`${link == 'Home' ? 'text-black' : 'text-gray-500'}`"
      >
        <nuxt-link :to="`/${link == 'Home' ? '' : link}`">{{ link }}</nuxt-link>
        <span v-if="link == 'Home'" class="mx-1">/</span>
      </li>
    </ul>
    Here is the food of the country of :
    <span class="text-teal-500">{{ country }}</span>
  </section>
</template>
