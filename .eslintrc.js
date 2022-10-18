module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  globals: {},
  plugins: ["markdown"],
  extends: ["prettier"],
  overrides: [
    {
      // 2. Enable the Markdown processor for all .md files.
      files: ["**/*.md"],
      processor: "markdown/markdown",
    },
  ],
};
