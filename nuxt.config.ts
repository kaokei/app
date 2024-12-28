import fs from 'node:fs';
import {
  ExternalPackageIconLoader,
  FileSystemIconLoader,
} from 'unplugin-icons/loaders';
import IconsResolver from 'unplugin-icons/resolver';
import ViteIcons from 'unplugin-icons/vite';
import ViteComponents from 'unplugin-vue-components/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
// https://github.com/unplugin/unplugin-icons/blob/main/examples/vite-vue3/vite.config.ts
// https://icones.js.org/
// https://icon-sets.iconify.design/
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  vite: {
    // build: {
    //   rollupOptions: {
    //     output: {
    //       manualChunks(id) {
    //         if (id.includes('node_modules')) {
    //           if (
    //             id.includes('vue') ||
    //             id.includes('dayjs') ||
    //             id.includes('lodash-es') ||
    //             id.includes('@kaokei')
    //           ) {
    //             return 'vendor-vue-dayjs-lodash-kaokei';
    //           }
    //           return 'vendor-deps';
    //         }
    //       },
    //     },
    //   },
    // },
    esbuild: {
      // https://github.com/nuxt/nuxt/issues/21756#issuecomment-1846568373
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true,
        },
      },
    },
    plugins: [
      ViteIcons({
        compiler: 'vue3',
        autoInstall: true,
        customCollections: {
          local: FileSystemIconLoader('assets/svg'),
          ...ExternalPackageIconLoader('@test-scope/test-color-icons'),
          ...ExternalPackageIconLoader('plain-color-icons'),
        },
      }),
      ViteComponents({
        dts: true,
        resolvers: [
          IconsResolver({
            strict: true,
            customCollections: [
              'local',
              'plain-color-icons',
              'test-color-icons',
            ],
          }),
        ],
      }),
    ],
  },
  nitro: {
    moduleSideEffects: ['reflect-metadata'],
  },
  imports: {
    // 禁止自动导入composables and utilities
    autoImport: false,
  },
  components: {
    // 禁止自动导入~/components
    dirs: [],
  },
  app: {
    baseURL: '/tool/',
    head: {
      title: 'kaokei',
      meta: [
        {
          name: 'description',
          content: 'kaokei',
        },
        {
          name: 'keyword',
          content: 'kaokei',
        },
      ],
      link: [
        {
          rel: 'shortcut icon',
          type: 'image/x-icon',
          href: `/favicon.ico`,
        },
      ],
      script: [
        {
          tagPosition: 'head',
          children: `window.globalThis||(window.globalThis=window),window.queueMicrotask||(window.queueMicrotask=function(t){Promise.resolve().then(t).catch(t=>setTimeout(()=>{throw t},0))}),[].at||(Array.prototype.at=function(t){if((t=Math.trunc(t)||0)<0&&(t+=this.length),!(t<0||t>=this.length))return this[t]}),[].flatMap||(Array.prototype.flatMap=function(t,e){for(var n,r=Object(this),o=r.length>>>0,i=[],a=0;a<o;a++)a in r&&(n=t.call(e,r[a],a,r),i=i.concat(n));return i}),Promise.allSettled||(Promise.allSettled=function(t){t=t.map(t=>Promise.resolve(t));return Promise.all(t.map(function(t){return t.then(function(t){return{status:"fulfilled",value:t}}).catch(function(t){return{status:"rejected",reason:t}})}))})`,
        },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss', 'dayjs-nuxt', 'unplugin-icons/nuxt'],
  dayjs: {
    locales: ['zh-cn'],
    plugins: ['relativeTime', 'duration', 'advancedFormat'],
    defaultLocale: 'zh-cn',
  },
});
