import { joinURL, withQuery } from 'ufo'

export default defineEventHandler(async (event) => {
  const { apiKey, apiBaseUrl } = useRuntimeConfig()
  const queryParam = getQuery(event)
  const path = getRouterParam(event, 'path') ?? ''

  const customQuery = {
    ...queryParam,
    apiKey: apiKey,
  }

  return await proxyRequest(
    event,
    withQuery(joinURL(apiBaseUrl, '', path), customQuery)
  )
})
