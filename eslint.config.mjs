import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
    rules: {
      "semi": ["error", "always"], // Force semicolons
      //"snakecase": ["error", { "properties": "always" }], // Enforce camelCase
      "quotes": ["error", "backtick"], // Enforce double quotes
      "eqeqeq": ["error", "always"], // Enforce strict equality (=== and !==)
      "curly": ["error", "all"], // Require curly braces for all control statements
      "indent": ["error", 4], // Enforce 2-space indentation
      "no-trailing-spaces": "error", // Disallow trailing spaces
      "eol-last": ["error", "always"], // Ensure newline at the end of files
      "no-unused-vars": ["warn"], // Warn about unused variables
      "no-console": "warn" // Warn on console.log (optional)
    }
  },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node, ...globals.jest } }
  },
  pluginJs.configs.recommended,
  {
    ignores: ["dist/", "test/"]
}
  
];
