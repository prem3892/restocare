import { defineConfig, globalIgnores } from "eslint/config";
import next from "eslint-config-next";
import nextPlugin from "@next/eslint-plugin-next";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default defineConfig([
  ...next,
  prettier,

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
      prettier: prettierPlugin,
    },

    rules: {
      // "no-console": ["error", { allow: ["warn", "error"] }],
      "no-console": ["error"],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "prettier/prettier": "error",

      ...nextPlugin.configs.recommended.rules,
    },
  },
]);
