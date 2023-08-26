<script lang="ts" setup>
import moment from 'moment'
import { NewsData } from '~/types/news'

interface Props {
  datas: NewsData
}

const props = defineProps<Props>()
</script>

<template>
  <div class="w-full grow-[1] relative overflow-hidden">
    <img
      :src="datas.urlToImage"
      class="object-cover h-full w-full hover:scale-110 transition-all duration-300 ease-in-out"
    />
    <div class="px-4 absolute bottom-0 pb-2 bg-[#28282830] w-full">
      <h1 class="text-white font-medium text-14 truncate">
        {{ datas.title }}
      </h1>
      <div class="flex gap-2 items-center">
        <p class="text-white font-normal text-10">
          {{ datas.author }}
        </p>
        <div class="border-r-[0.5px] border-white h-[10px]"></div>
        <p class="text-white font-normal text-10 truncate">
          {{ moment(datas.publishedAt).format('dddd, DD MMM YY') }}
        </p>
      </div>
    </div>
  </div>
</template>
