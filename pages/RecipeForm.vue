<script setup lang="ts">
const router = useRouter();
const email = ref<string>("");
const title = ref<string>("");
const description = ref<string>("");
const ingredients = ref<{ value: string }[]>([{ value: "" }]);
const category = ref<string>("Thai");
const img = ref(null);

const imgOnChange = (e: any) => {
  const file = e.target.files[0];
  img.value = file;
};

const increaseIngredient = () => {
  ingredients.value.push({ value: "" });
};

async function onsubmit() {
  const slug = computed(() => title.value.split(" ").join("-"));
  const source = ref(
    `https://www.jamieoliver.com/recipes/seafood-recipes/${slug.value}/`
  );
  const formatData = new FormData();
  formatData.append("title", title.value);
  formatData.append("description", description.value);
  formatData.append("source", source.value);
  formatData.append("category", category.value);
  ingredients.value.forEach((el) => {
    formatData.append("ingredients", el.value);
  });
  if (img.value) {
    formatData.append("file", img.value);
  }
  formatData.append("email", email.value);
  formatData.append("slug", slug.value);

  const data = await $fetch("/api/home", {
    method: "POST",
    body: formatData,
  });
  if (data) {
    router.push("/explore-latest");
  }
}
// --- title url ----
useHead({
  title: "Recipe Form",
});
</script>

<template>
  <section class="Recipe_Form py-5 px-3">
    <div class="box_form">
      <div class="w-fit mx-auto mb-5 text-center">
        <h3 class="text-gray-950 text-3xl font-bold">Submit Your Recipe</h3>
        <p class="text-sm text-gray-500 max-w-[500px]">
          Share your amazing recipes with thounsands of web developers across
          the world. Fill out form to get start.
        </p>
      </div>
      <form
        class="form w-[600px] max-w-full mx-auto"
        @submit.prevent="onsubmit"
        enctype="multipart/form-data"
      >
        <!-- Email -->
        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model="email" />
        <!-- Name -->
        <label for="recipe_name">Recipe Name</label>
        <input
          type="text"
          id="recipe_name"
          name="recipe_name"
          v-model="title"
        />
        <!-- Description -->
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          v-model="description"
        ></textarea>
        <!-- Ingredients -->
        <label for="Ingredients">Ingredients</label>
        <small class="mt-1">Example:ice</small>
        <input
          type="text"
          id="Ingredients"
          name="ingredients"
          v-for="(input, index) in ingredients"
          :key="index"
          v-model="ingredients[index].value"
        />
        <!-- +ingredients -->
        <button
          type="button"
          class="text-blue-500 border-[1px] border-blue-500 font-medium py-2 px-3 my-3"
          @click="increaseIngredient"
        >
          +ingredients
        </button>
        <!-- category -->
        <label for="category">Select Category</label>
        <select name="category" id="category" v-model="category">
          <option
            :value="item"
            v-for="(item, index) in ['Thai', 'American', 'Chinese']"
            :key="index"
          >
            {{ item }}
          </option>
        </select>
        <!-- img -->
        <label for="img">Product Image</label>
        <input type="file" id="img" name="fileImg" @change="imgOnChange" />
        <!-- submit -->
        <button type="submit" class="text-white bg-blue-500 px-5 py-2 mt-3">
          Submit
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
label,
input {
  display: block;
}

label {
  font-size: 14px;
  font-weight: 500;
}

input,
textarea,
select {
  border: 1px solid #ccc;
  width: 100%;
  padding: 5px 10px;
  margin: 0 auto 12px;
}

textarea {
  resize: none;
  height: 90px;
}
</style>
