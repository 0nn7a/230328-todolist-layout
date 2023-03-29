import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/rollup';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/230328-todolist-layout/',
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: './auto-imports.d.ts',
    }),

    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dirs: ['src/components', 'src/views'],
      dts: './components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      //轉換成從源頭的絕對路徑後相當於：User/Desktop/project/src
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
