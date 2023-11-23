module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  rules: {
    "vue/no-multiple-template-root": "off", // allows multiple template roots in one component
    "vue/require-default-prop": "off", // eliminates requirement to have default value for each prop that is not marked as required
    "no-console": "off", // This rule disallows calls or assignments to methods of the console object. https://eslint.org/docs/latest/rules/no-console#rule-details
    "vue/multi-word-component-names": "off", // This rule disables the requirement that components names to be always multi-word
  },
};
