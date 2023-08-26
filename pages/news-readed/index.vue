<script lang="ts" setup>
import { useNewsStore } from '~/store'
import { NewsData } from '~/types/news'

// define store
const newsStore = useNewsStore()

// route
const router = useRouter()

// state
const articleList = ref<NewsData[]>()

onMounted(() => {
  articleList.value = newsStore.newsReaded
})

const click = (url: string) => {
  window.open(url, '_blank', 'noreferrer')
}
</script>

<template>
  <div class="min-h-screen w-full flex justify-center text-darken">
    <div class="container flex flex-col py-8 mx-4 md:mx-0 lg:mx-0 gap-4">
      <AtomsButton label="Back" @click="router.push('/')" color="#0F2435" />
      <div
        v-if="articleList?.length"
        v-for="(item, i) in articleList"
        :key="i"
        class="bg-white shadow-gg flex gap-4 w-full"
      >
        <div class="h-32 min-w-[200px]">
          <img
            :src="item?.urlToImage"
            class="object-cover h-full w-full hover:scale-110 transition-all duration-300 ease-in-out"
          />
        </div>

        <div class="grow-[1] flex flex-col gap-2 overflow-hidden my-6 mr-6">
          <h1 class="font-bold truncate">{{ item.title }}</h1>
          <p
            class="text-12 text-blue-400 underline cursor-pointer truncate"
            @click="click(item.url)"
          >
            {{ item.url }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
