import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  preview: {
    host: true,
    port: process.env.PORT || 4173,
    allowedHosts: ["nitish-potfolio-4.onrender.com"]
  }
});
