<script lang="ts" setup>
import moment from 'moment'
import { storeToRefs } from 'pinia'

import { useNewsStore } from '~/store'
import { NewsData } from '~/types/news'

// define store
const newsStore = useNewsStore()
const { newsDatas, search } = storeToRefs(newsStore)

onMounted(() => {
  getDatas()
})

// router
const router = useRouter()

// state
const loading = ref<boolean>(true)

// getdatas
const getDatas = async () => {
  loading.value = true
  await useNews()
  loading.value = false
}

const datas = computed(() => {
  let splitedArticles: NewsData[][] = []
  const chunkSize = 10
  if (newsDatas?.value?.length) {
    for (let i = 0; i < newsDatas.value.length; i += chunkSize) {
      const chunk = newsDatas.value.slice(i, i + chunkSize)
      splitedArticles.push(chunk)
    }
  }
  return splitedArticles
})
</script>
<template>
  <div class="min-h-screen w-full flex justify-center text-darken">
    <div class="container flex flex-col py-8 mx-4 md:mx-0 lg:mx-0 gap-4">
      <AtomsSearch placeholder="Search" @search="getDatas()" />

      <AtomsButton
        label="List Readed News"
        color="#0F2435"
        @click="router.push('news-readed')"
      />
      <div
        v-if="datas?.length && !loading"
        class="flex flex-col py-8 mx-4 md:mx-0 lg:mx-0 gap-4"
      >
        <div
          v-for="(item, i) in datas"
          :key="i"
          class="h-full grid grid-rows-2 gap-4"
        >
          <div
            class="grid grid-rows-2 grid-cols-10 gap-4 max-h-[45vh] lg:max-h-[60vh]"
          >
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

          <div
            class="grid grid-rows-2 grid-cols-10 gap-4 max-h-[45vh] lg:max-h-[60vh]"
          >
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
      <OrganismsHomeSkeleton v-else-if="loading && !datas?.length" />
      <AtomsNotFound v-else-if="!loading && !datas?.length" />
    </div>
  </div>
</template>
