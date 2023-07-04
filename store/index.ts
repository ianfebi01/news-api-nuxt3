import { defineStore } from "pinia";
import { NewsData } from "~/types/news";

export const useNewsStore = defineStore("news", () => {
  const newsDatas = ref<NewsData[]>();
  const newsReaded = ref<NewsData[]>([]);

  const addNewsReaded = (data: NewsData) => {
    newsReaded.value.push(data);
    console.log(newsReaded);
  };
  return {
    newsDatas,
    newsReaded,
    addNewsReaded,
  };
});
