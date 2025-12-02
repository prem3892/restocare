import { defineConfig, globalIgnores } from "eslint/config";
import next from "eslint-config-next";
import nextVitals from "eslint-config-next/core-web-vitals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import nextPlugin from "@next/eslint-plugin-next";

export default defineConfig([
  ...next,
  ...nextVitals,

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts"
  ]),

  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },

    plugins: {
      "@typescript-eslint": tseslint,
      next: nextPlugin
    },

    rules: {
      // ❌ block console.log
      "no-console": ["error", { allow: ["warn", "error"] }],

      // ❌ block any
      "@typescript-eslint/no-explicit-any": "error",

      // ❌ block unused variables
      "@typescript-eslint/no-unused-vars": "error",

      // next.js recommended rules
      ...nextPlugin.configs.recommended.rules
    }
  }
]);
