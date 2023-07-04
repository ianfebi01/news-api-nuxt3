// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Home",
      titleTemplate: "%s | News",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16x",
          href: "/favicon-16x16.png",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "preload",
          href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap",
          as: "style",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap",
        },
      ],
    },
  },

  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt", "nuxt-icon", "@nuxt-alt/proxy", "@vueuse/nuxt"],
  css: ["~/assets/scss/main.scss"],

  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: "123",
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBase: process.env.API_BASE || "default_api_url",
      otherUrl: process.env.OTHER_URL || "default_other_url",
    },
  },

  proxy: {
    enableProxy: true,
    proxies: {
      "^/api-web/.*": {
        target: process.env.NUXT_BASE_API,
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api\-web/, ""),
      },
    },
  },
});
