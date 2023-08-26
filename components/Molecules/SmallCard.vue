<script lang="ts" setup>
import moment from 'moment'
import { useNewsStore } from '~/store'
import { NewsData } from '~/types/news'

interface Props {
  datas: NewsData
}

// define store
const newsStore = useNewsStore()

const props = defineProps<Props>()

const click = (data: NewsData) => {
  newsStore.addNewsReaded(data)

  window.open(data.url, '_blank', 'noreferrer')
}
</script>
<template>
  <div
    class="gap-2 col-span-3 row-span-1 hover:bg-hover shadow-gg transition-all duration-300 ease-in-out cursor-pointer"
    @click="click(datas)"
  >
    <div class="h-full flex flex-col">
      <section>
        <AtomsImageTitle :datas="datas" />
      </section>
      <section class="flex h-[80px] items-center px-2">
        <!-- <div class="border border-green-700"> -->
        <p class="text-12 text-justify line-clamp-2">
          {{ datas?.description }}
        </p>
        <!-- </div> -->
      </section>
    </div>
  </div>
</template>
