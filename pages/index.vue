<script lang="ts" setup>
import moment from "moment";

import { useNewsStore } from "~/store";
import { NewsData } from "~/types/news";

// define store
const newsStore = useNewsStore();

onMounted(() => {
  getDatas();
});

// router
const router = useRouter();

// state
const loading = ref<boolean>(true);
const articles = ref<NewsData[]>();
const splitedArticles = ref<NewsData[][]>([]);
const search = ref<string>("Apple");

watchDebounced(
  search,
  () => {
    if (search.value === "") {
      getDatas("Apple");
    }
    getDatas(search.value);
  },
  { debounce: 500 }
);

// getdatas
const getDatas = async (search?: string | undefined) => {
  loading.value = true;
  splitedArticles.value = [];
  const res = await useNews(search);
  if (res) {
    articles.value = newsStore.newsDatas;
    const chunkSize = 10;
    if (articles?.value?.length) {
      for (let i = 0; i < articles.value.length; i += chunkSize) {
        const chunk = articles.value.slice(i, i + chunkSize);
        splitedArticles.value.push(chunk);
      }
    }
  }
  loading.value = false;
};
</script>
<template>
  <div class="min-h-screen w-full flex justify-center text-darken">
    <div class="container flex flex-col py-8 mx-4 md:mx-0 lg:mx-0 gap-4">
      <AtomsSearch v-model="search" placeholder="Search" />
      <AtomsButton
        label="List Readed News"
        color="#0F2435"
        @click="router.push('news-readed')"
      />
      <div
        v-if="splitedArticles.length && !loading"
        class="flex flex-col py-8 mx-4 md:mx-0 lg:mx-0 gap-4"
      >
        <div
          v-for="(item, i) in splitedArticles"
          :key="i"
          class="h-full grid grid-rows-2 gap-4"
        >
          <div class="grid grid-rows-2 grid-cols-10 gap-4 max-h-[45vh]">
            <!-- 0 -->
            <MoleculesBigCard :datas="item[0]" />
            <!-- 1 -->
            <MoleculesSmallCard :datas="item[1]" />
            <!-- 2 -->
            <MoleculesSmallCard :datas="item[2]" />
            <!-- 3 -->
            <MoleculesSmallCard :datas="item[3]" />
            <!-- 4 -->
            <MoleculesSmallCard :datas="item[4]" />
          </div>

          <div class="grid grid-rows-2 grid-cols-10 gap-4 max-h-[45vh]">
            <MoleculesSmallCard :datas="item[5]" />
            <!-- 2 -->
            <MoleculesSmallCard :datas="item[6]" />
            <!-- 3 -->
            <MoleculesBigCard :datas="item[7]" />
            <MoleculesSmallCard :datas="item[8]" />
            <!-- 4 -->
            <MoleculesSmallCard :datas="item[9]" />
          </div>
        </div>
      </div>
      <OrganismsHomeSkeleton v-else-if="loading && !splitedArticles.length" />
    </div>
  </div>
</template>
