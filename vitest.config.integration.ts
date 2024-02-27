import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    // globals: true,
    poolOptions: {
      threads: {
        // this is because integration tests work with database, we dont want to run them in parallel because many tests can run at the same time and cause database lock issues or other problems
        singleThread: true,
      },
    },
    setupFiles: ['./tests/setup.integration.ts'],
    include: ['./app/**/integration/*.test.{ts,tsx}'],
  },
});
