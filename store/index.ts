import { defineStore } from 'pinia'
import { NewsData } from '~/types/news'

export const useNewsStore = defineStore(
  'news',
  () => {
    const newsDatas = ref<NewsData[]>()
    const newsReaded = ref<NewsData[]>([])
    const search = ref<string>('Apple')

    const addNewsReaded = (data: NewsData) => {
      const index = newsReaded.value.findIndex((item) => item.url === data.url)
      if (index === -1) {
        newsReaded.value.push(data)
      }
    }
    return {
      newsDatas,
      newsReaded,
      search,
      addNewsReaded,
    }
  },
  {
    persist: {
      storage: persistedState.localStorage,
      paths: ['newsReaded'],
    },
  }
)
