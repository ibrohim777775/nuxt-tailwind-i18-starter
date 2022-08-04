import { fileURLToPath } from 'url'
import { resolve, dirname } from 'node:path'
import eslintPlugin from 'vite-plugin-eslint'
import ViteI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { PluginOptions } from '@intlify/unplugin-vue-i18n'
import { defineNuxtConfig } from 'nuxt'

const i18nConfig: PluginOptions = {
  include: [
    resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
  ]
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // Build directory
  buildDir: '.nuxt',

  nitro: {
    preset: process.env.NITRO_PRESET ?? 'node-server'
  },

  ssr: true,

  alias: {
    '#pages': 'node_modules/nuxt/dist/pages/runtime',
    '#pages/*': 'node_modules/nuxt/dist/pages/runtime/*'
  },

  router: {
    scrollBehavior: {
      top: 0,
      behavior: 'smooth'
    }
  },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    // ['@pinia/nuxt', { disableVuex: true }],
    // '@nuxtjs/color-mode',
    // '@nuxtjs/strapi',
    'nuxt-icons'
  ],

  // Vite configuration
  vite: {
    plugins: [eslintPlugin({}), ViteI18nPlugin({ ...i18nConfig })],
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
      }
    }
  },

  // CSS
  css: ['assets/css/app.css'],

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
          crossOrigin: true
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap'
        }
      ]
    }
  },

  // Build options
  build: {
    quiet: true,
    analyze: true,
    extractCSS: true,
    optimizeCSS: true,
    cssSourceMap: true,

    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },

  // Typescript
  typescript: {
    strict: true,
    typeCheck: true
  },

  // Runtime Config
  runtimeConfig: {
    tailwindcss: {
      viewer: true
    },

    public: {
      tailwindcss: {
        viewer: false
      }
    }
  },

  // NuxtImage: https://v1.image.nuxtjs.org/get-started
  image: {
    domains: ['*jobo.uz', 'jobo.uz']
    // TODO: Create custom provider
    // providers: {
    //   cdn: {
    //     name: 'cdn-provider'
    //   }
    // }
  },

  // StrApi https://strapi.nuxtjs.org/usage
  // strapi: {
  //   url: 'https://api.jobo.uz',
  //   prefix: '/api',
  //   version: 'v4',
  //   cookie: {}
  // }
})
