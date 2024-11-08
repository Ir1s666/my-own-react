import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: 'ireact.createElement',
    jsxFragment: 'ireact.Fragment',
  },
  resolve: {
    alias: {
      'react': 'ireact',
      'react-dom': 'ireact'
    }
  }
})
