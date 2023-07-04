<script lang="ts" setup>
import moment from "moment";
import { useNewsStore } from "~/store";
import { NewsData } from "~/types/news";

interface Props {
  datas: NewsData;
}

// store

// define store
const newsStore = useNewsStore();

const click = (data: NewsData) => {
  newsStore.addNewsReaded(data);
  window.open(data.url, "_blank", "noreferrer");
};
const props = defineProps<Props>();
</script>
<template>
  <div
    class="row-span-2 col-span-4 flex flex-col gap-4 pb-2 hover:bg-hover shadow-gg transition-all duration-300 ease-in-out"
    @click="click(datas)"
  >
    <AtomsImageTitle :datas="datas" />
    <div class="w-full flex flex-col grow-[1] items-center px-2">
      <p class="text-12 text-center">{{ datas?.description }}</p>
    </div>
  </div>
</template>
