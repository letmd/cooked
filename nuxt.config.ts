// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        // fonts
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'preload',
          as: 'style',
          onload: "this.rel='stylesheet'",
          href: 'https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300..700&display=swap',
        },
      ],
    },
  },
  components: ['@/components', { path: '@/components/common', prefix: 'C' }],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', 'nuxt-svg-sprite-icon', '@nuxt/image'],
  css: ['~/assets/styles/app.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "sass:math"; @use "~/assets/styles/utils" as *;',
        },
      },
    },
  },
});
