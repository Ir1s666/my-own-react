import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: './lib/index.ts',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      output: [
        {
          format: 'es',
          dir: './dist/esm',
          entryFileNames: '[name].js',
        },
        {
          format: 'cjs',
          dir: './dist/cjs',
          entryFileNames: '[name].js',
        },
      ],
    },
  },
  plugins: [
    dts({
      outDir: './dist/types',
      include: ['lib/**/*'],
    }),
  ],
})
