module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint-config",
    "eslint-config/mixins/react",
  ],
  settings: {
    react: {
      version: "18.2",
    },
  },
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};