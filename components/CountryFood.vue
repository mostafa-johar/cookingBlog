<script setup lang="ts">
// -- import
import { useStore } from "~/store/store";
const store = useStore();

// -- actions
const { getImgPath } = store;

// props from component
const props = defineProps(["categoryFood"]);
const filterCategoryFood = computed(() => {
  return [...props.categoryFood].splice(-5, 5);
});
</script>
<template>
  <section class="countryFood py-5">
    <!-- box-food -->
    <div class="box_food grid md:grid-cols-5 grid-cols-2 gap-2">
      <!-- box -->
      <nuxt-link
        :to="
          food.title == 'View All' ? '/view-all' : `/countryFood/${food.title}`
        "
        class="flex flex-col gap-2 hover:scale-[1.1] transition-all flex-wrap"
        v-for="(food, index) in filterCategoryFood"
        :key="food.title"
      >
        <div
          class="border-2 rounded-md max-h-[100px] flex justify-center items-center overflow-hidden shadow-md"
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
</template>
