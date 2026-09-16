// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Hace falta para que las etiquetas og: del layout salgan con la
  // dirección completa: WhatsApp no lee rutas relativas.
  site: "https://boda-maquiber-y-elva-2026.vercel.app",
  vite: {
    plugins: [tailwindcss()]
  }
});