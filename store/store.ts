import { defineStore } from "pinia";

export const useStore = defineStore("cookBlog", () => {
  // ------ States ------
  interface categoryee {
    title: string;
    description: string;
    Source: string;
    ingredients: string[];
    category: string;
    img: string;
    slug: string;
  }
  // ----- fetch data form db --------

  const AllCategories = ref<categoryee[]>([]);
  const getData = async () => {
    try {
      const { data } = await useFetch("/api/home");
      const { all } = await data.value;
      AllCategories.value = all;
    } catch (error) {
      console.log(error);
    }
  };

  getData();
  // ----------- End Fetch --------------

  // ----------- Start Fetch explore-latest --------------
  const exploreLatest = ref<categoryee[]>([]);
  const getExploreLatest = async () => {
    try {
      const { data } = await useFetch("/api/explore-latest");
      const { all } = await data.value;
      exploreLatest.value = all;
    } catch (error) {
      console.log(error);
    }
  };
  getExploreLatest();
  // ----------- End Fetch explore-latest --------------

  // ----------- Start Fetch explore-random --------------
  const exploreRandom = ref<categoryee[]>([]);
  const getExploreRandom = async () => {
    try {
      const { data } = await useFetch("/api/explore-random");
      const { all } = await data.value;
      exploreRandom.value = all;
    } catch (error) {
      console.log(error);
    }
  };
  getExploreRandom();
  // ----------- End Fetch explore-latest --------------

  // ----------- Start Fetch view-all --------------

  const viewAll = ref<{ img: string; title: string }[]>([]);
  const getViewAll = async () => {
    try {
      const { data } = await useFetch("/api/view-all");
      const { all } = await data.value;
      viewAll.value = all;
    } catch (error) {
      console.log(error);
    }
  };
  getViewAll();
  // ----------- End Fetch explore-latest --------------

  //--- getters ---
  const filterCategories = (title: string): categoryee[] => {
    return [...AllCategories.value].filter((item: any) => {
      return item.category == title;
    });
  };

  //--- function ---
  const getImgPath = (imgName: string) => `/imgs/${imgName}`;

  // Return
  return {
    exploreLatest,
    filterCategories,
    getImgPath,
    exploreRandom,
    viewAll,
    AllCategories,
  };
});
