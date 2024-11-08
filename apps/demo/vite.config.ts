import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'react/jsx-runtime': path.resolve(__dirname, '。/node_modules/ireact/dist/jsx-runtime/index.js'),
      'react/jsx-dev-runtime': path.resolve(__dirname, '。/node_modules/ireact/dist/jsx-dev-runtime/index.js'),
    }
  }
})
