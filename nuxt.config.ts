import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/main2.css'],
  
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});