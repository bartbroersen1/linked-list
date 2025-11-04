import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
]);

//for default eslint setup run: "npm init @eslint/config@latest"
//lint code with: "npx eslint project-dir/ file.js"

//info about options: "https://eslint.org/docs/latest/use/configure/"

//eslint-config-prettier is not needed while running both eslint and prettier with default settings.