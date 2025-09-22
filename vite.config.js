import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // listen on all addresses, not just localhost
    port: 5173,      // default dev port
    allowedHosts: [
      "marse-admin-frontend-dev.delightfulsea-6d057c7f.centralus.azurecontainerapps.io"
    ]
    // or: allowedHosts: "all"  // allow any host (less secure, fine for dev)
  }
});
