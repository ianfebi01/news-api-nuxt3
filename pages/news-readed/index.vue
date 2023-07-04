<script lang="ts" setup>
import { useNewsStore } from "~/store";
import { NewsData } from "~/types/news";

// define store
const newsStore = useNewsStore();

// route
const router = useRouter();

// state
const articleList = ref<NewsData[]>();

onMounted(() => {
  articleList.value = newsStore.newsReaded;
});

const click = (url: string) => {
  window.open(url, "_blank", "noreferrer");
};
</script>

<template>
  <div class="min-h-screen w-full flex justify-center text-darken">
    <div class="container flex flex-col py-8 mx-4 md:mx-0 lg:mx-0 gap-4">
      <AtomsButton label="Back" @click="router.push('/')" color="#0F2435" />
      <div
        v-for="(item, i) in articleList"
        :key="i"
        class="bg-white shadow-gg flex gap-4"
      >
        <div class="h-32 w-50 relative overflow-hidden">
          <img
            :src="item.urlToImage"
            class="object-cover h-full w-full hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </div>
        <div class="flex flex-col gap-2 justify-center">
          <h1 class="font-bold">{{ item.title }}</h1>
          <p
            class="text-12 text-blue-400 underline cursor-pointer"
            @click="click(item.url)"
          >
            {{ item.url }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
