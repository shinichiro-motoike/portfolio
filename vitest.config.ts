import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      coverage: {
        exclude: [
          'env.d.ts',
          'eslint.config.ts',
          'playwright.config.ts',
          'vite.config.ts',
          'vitest.config.ts',
          //TODO: 以下、暫定的に除外している
          'src/App.vue',
          'src/main.ts',
          'src/components/icons/**',
        ],
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        reportsDirectory: './tests/unit/coverage',
      },
    },
  }),
)
