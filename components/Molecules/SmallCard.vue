<script lang="ts" setup>
import moment from "moment";
import { useNewsStore } from "~/store";
import { NewsData } from "~/types/news";

interface Props {
  datas: NewsData;
}

// define store
const newsStore = useNewsStore();

const props = defineProps<Props>();

const click = (data: NewsData) => {
  newsStore.addNewsReaded(data);

  window.open(data.url, "_blank", "noreferrer");
};
</script>
<template>
  <div
    class="gap-2 col-span-3 row-span-1 hover:bg-hover shadow-gg transition-all duration-300 ease-in-out"
    @click="click(datas)"
  >
    <div class="h-full">
      <AtomsImageTitle :datas="datas" />
      <div
        class="w-full flex flex-col max-h-[50px] overflow-scroll items-center px-2"
      >
        <p class="text-12 text-center">
          {{ datas?.description }}
        </p>
      </div>
    </div>
  </div>
</template>
