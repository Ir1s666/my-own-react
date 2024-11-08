import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: './lib/index.ts',
        'jsx-runtime/index': './lib/jsx-runtime/index.ts',
        'jsx-dev-runtime/index': './lib/jsx-dev-runtime/index.ts'
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: [],
      output: {
        preserveModules: true,
        entryFileNames: `[name].js`,
      },
    },
    minify: false,
  },
  plugins: [
    dts({
      include: ['lib'],
      outDir: './dist/types',
    }),
  ],
})
