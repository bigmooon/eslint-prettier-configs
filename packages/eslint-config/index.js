const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
const tseslint = require("typescript-eslint");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

module.exports = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.config({
    plugins: ["no-relative-import-paths"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  }),
];