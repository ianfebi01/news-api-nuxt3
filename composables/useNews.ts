import moment from 'moment'
import { storeToRefs } from 'pinia'
import { URLSearchParams } from 'url'
import { useNewsStore } from '~/store'
import { GetNewsResponseAPI } from '~/types/news'

interface Params {
  q: string
  from: string
  sortBy: string
  apiKey?: string | undefined
}

export const useNews = () => {
  // define store
  const newsStore = useNewsStore()
  const { search } = storeToRefs(newsStore)

  const date = new Date()
  const month = date.getMonth() - 1
  const day = date.getDate() + 1
  date.setMonth(month)
  date.setDate(day)
  const from = moment(date).format('DD-mm-yy')

  return $fetch(`/api/v2/everything`, {
    query: {
      q: search.value || '',
      from,
      sortBy: 'popularity',
    },
    method: 'GET',
    onResponse: ({ response }) => {
      newsStore.newsDatas = response?._data.articles
    },
    onRequest: () => {
      newsStore.newsDatas = []
    },
    server: false,
  })
  // })
}
