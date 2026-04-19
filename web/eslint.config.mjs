import pluginNext from "@next/eslint-plugin-next";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      "@next/next": pluginNext,
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
      "@next/next/no-img-element": "off",
      "react-hooks/exhaustive-deps": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];