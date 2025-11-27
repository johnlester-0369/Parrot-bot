import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    // Important: DO NOT disable network
    // network: { enabled: true }  // (optional) explicit
  },
});
