// https://nuxt.com/docs/api/configuration/nuxt-config
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
export default defineNuxtConfig({
  telemetry: false,
  vite: {
    plugins: [
      vanillaExtractPlugin({})
    ],
  },
  ssr: false,
  devtools: {
    enabled: true
  }
})
