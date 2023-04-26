// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "./index.html",
        about: "./about.html",
        services: "./services.html",
        contact: "./contact.html",
      }
    }
  }
})

