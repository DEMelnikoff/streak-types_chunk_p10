import { defineConfig } from "vitest/config";

export default defineConfig({
    base: "/streak-types_chunk_p10/",
    build: {
      target: "esnext",
      sourcemap: true
    },
    test: {
      environment: 'jsdom',
      include: ['tests/*.{test,spec}.{js,ts}']
    }
  });
  