import { defineConfig, globalIgnores } from "eslint/config";
import next from "eslint-config-next";
import nextPlugin from "@next/eslint-plugin-next";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default defineConfig([
  ...next,

  globalIgnores([".next/**", "out/**", "build/**"]),

  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },

    plugins: {
      "@typescript-eslint": tseslint,
      next: nextPlugin,
    },

    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": "error",
      ...nextPlugin.configs.recommended.rules,
    },
  },
]);
