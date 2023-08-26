import { URLSearchParams } from 'url'
import { useNewsStore } from '~/store'
import { GetNewsResponseAPI } from '~/types/news'

interface Params {
  q: string
  from: string
  sortBy: string
  apiKey?: string | undefined
}

const apiKey: string = 'ff34775aec394cd0a4ade64951ab81eb'
// `/api-web/v2/top-headlines?country=id&apiKey=${apiKey}`,

export const useNews = async (search: string = 'Apple') => {
  // define store
  const newsStore = useNewsStore()
  return $fetch<GetNewsResponseAPI>(
    `/api/v2/everything?q=${search}&from=2023-07-26&sortBy=popularity`,
    {
      method: 'GET',
    }
  )
    .then((res) => {
      newsStore.newsDatas = res.articles
      return true
    })
    .catch((err) => {
      console.log(err)
      return false
    })
}
