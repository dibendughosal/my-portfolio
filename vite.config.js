import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import Typed from 'typed.js';

// https://vite.dev/config/
export default defineConfig({
  base: "",
  assetsInclude: ["**/*.JPG"],
  plugins: [react(), tailwindcss()],
  
});
