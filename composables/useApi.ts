import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'

type CustomFetchOptions<T> = UseFetchOptions<T> & {
  excludeInterceptor?: number[]
}

export function useApi<T>(url: string, opts: CustomFetchOptions<T> = {}) {
  const { ...options } = opts

  const defaults: UseFetchOptions<T> = {
    onRequest({ options }) {
      options.headers = new Headers(options.headers)
      options.headers.set('X-Requested-With', 'XMLHttpRequest')
    },

    onResponseError({ response }) {
      console.log({ response })

      if (response.status === 401) {
        if (typeof window !== 'undefined') window.location.reload()
        alert('unAuthorized')
      }

      if (response.status === 403) {
        alert('Not Found')
      }

      if (response.status >= 500) {
        alert('Server Error')
      }
    },
  }

  const params = defu(options, defaults)

  return useFetch(url, params)
}
