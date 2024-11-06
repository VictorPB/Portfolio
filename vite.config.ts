import { defineConfig } from 'vite'

export default defineConfig({
	resolve: {
		alias: {
			'@components': '/src/components',
			'@layouts': '/src/layouts',
			'@public': '/public',
			'@data': '/src/data'
		}
	}
})
