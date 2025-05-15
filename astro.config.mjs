// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';


import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
  integrations: [
    
 icon(),   
   
  ],

  output:'server',

  vite: {
    plugins: [tailwindcss()],
  
   

  },

  adapter: netlify()
});