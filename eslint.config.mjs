import globals, { es2021 } from "globals";
import pluginJs from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier, { rules } from "eslint-config-prettier";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        es2021: true
      },
      ecmaVersion: 2021,
      sourceType: "module"
    },
    plugins: {
      prettier: eslintPluginPrettier
    },
    extends: [pluginJs.configs.recommended, eslintConfigPrettier],
    rules: {
      "prettier/prettier": "error"
    }
  },
  {
    file: ["src/**/*"]
  }
];
