// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"

import cloudflare from "@astrojs/cloudflare"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ["css-tree"],
    },
  },
  site: "https://ploycheeze.com",
  server: {
    allowedHosts: ["packaging-pressed-events-dried.trycloudflare.com"],
  },
  integrations: [react()],
  adapter: cloudflare({
    imageService: "compile",
  }),
})
