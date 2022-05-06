import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      include: ['lib/scripts/**'],
      reporter: ['json', 'html']
    }
  },
})


