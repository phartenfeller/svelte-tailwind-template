module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  env: {
    es6: true,
    browser: true,
  },
  extends: ["plugin:svelte3/recommended", "prettier"],
  plugins: ["svelte3", "prettier"],
  overrides: [
    {
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  rules: {
    // ...
  },
  settings: {
    // ...
  },
};
