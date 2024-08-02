import { resolve } from 'node:path'
import { defineConfig } from 'vitest/config'

const timeout = process.env.CI ? 50000 : 30000

process.env.NODE_ENV = process.env.VITE_TEST_BUILD
  ? 'production'
  : 'development'

export default defineConfig({
  resolve: {
    alias: {
      '~utils': resolve(__dirname, './playground/test-utils'),
    },
  },
  test: {
    include: ['./playground/**/**/*.spec.[tj]s'],
    exclude: [
      // skip link vite tets at local, it will panic at v8.
      '**/node_modules/**',
      // need to system format
      './playground/vue-legacy/**/*.spec.[tj]s',
      // need to umd format
      './playground/vue-lib/**/*.spec.[tj]s',
      // ssr-vue test-server has runtime issue
      './playground/ssr-vue/**/*.spec.[tj]s',
    ],
    setupFiles: ['./playground/vitestSetup.ts'],
    globalSetup: ['./playground/vitestGlobalSetup.ts'],
    testTimeout: timeout,
    hookTimeout: timeout,
    reporters: 'dot',
    onConsoleLog(log) {
      if (log.match(/experimental|jit engine|emitted file|tailwind/i))
        return false
    },
  },
})
