// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"
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

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Anakotmai",
      cssVariable: "--font-anakotmai",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/anakotmai/Anakotmai-medium.woff2"],
            weight: "normal",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/anakotmai/Anakotmai-light.woff2"],
            weight: "light",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/anakotmai/Anakotmai-bold.woff2"],
            weight: "bold",
            style: "normal",
          },
        ],
      },
    },
  ],
  integrations: [react()],
  adapter: cloudflare({
    imageService: "compile",
  }),
})
