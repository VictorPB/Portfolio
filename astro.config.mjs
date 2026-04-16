import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import netlify from '@astrojs/netlify'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
    site: 'https://vipeba.dev',
    integrations: [tailwind(), mdx(), sitemap()],
    output: 'server',
    adapter: netlify()
})