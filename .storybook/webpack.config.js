/**
 * Black magic webpack incantations taken from:
 * https://github.com/storybookjs/storybook/issues/2792
 */

// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const path = require("path");

module.exports = ({ config }) => {
  config.resolve.extensions.push(
    ".ts",
    ".tsx",
    ".vue",
    ".css",
    ".less",
    ".scss",
    ".sass",
    ".html"
  );

  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve(__dirname, "../src")
  };

  // https://stackoverflow.com/a/56250942/4906586
  config.module.rules.push({
    test: /\.stories\.js?$/,
    exclude: /node_modules/,
    use: [
      { loader: require.resolve("babel-loader") },
    //   // https://github.com/storybookjs/storybook/issues/6857#issuecomment-494675710
    //   { loader: require.resolve("@storybook/addon-storysource/loader") }
    ]
  });

  config.module.rules.push({
    test: /\.scss$/,
    // Global SCSS: https://github.com/storybookjs/storybook/issues/6743#issuecomment-490822920
    use: [
      "vue-style-loader",
      "css-loader",
      {
        loader: "sass-loader",
        options: { prependData: `@import "~@/styles/_import.scss";` }
      }
    ]
  });

  return config;
};