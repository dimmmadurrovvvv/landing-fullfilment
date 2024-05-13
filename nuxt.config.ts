export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ` 
                @import "@/assets/scss/abstracts/_functions.scss";
                @import "@/assets/scss/abstracts/_variables.scss";
                @import "@/assets/scss/abstracts/_mixins.scss";`,
        },
      },
    },
  },
  modules: ['@nuxtjs/svg-sprite', '@element-plus/nuxt', 'nuxt-swiper'],
  elementPlus: {
    importStyle: false,
  },
  svgSprite: {
    publicPath: '/_nuxt/'
  },
  css: ['@/assets/scss/_main.scss'],
});
