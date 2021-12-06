import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  base: process.env.ELECTRON=="true" ? './' : ".",
  plugins: [
    vue({
        template: { transformAssetUrls }
    }),
    quasar({
        sassVariables: 'src/quasar-variables.sass'
    })
  ]
})
