module.exports = {
  syntax: {
    ...require("postcss-jsx")
  },
  plugins: [require("autoprefixer")({ grid: "autoplace" })]
};
