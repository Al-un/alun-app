// Webpack bundle analyzer: https://stackoverflow.com/a/57157879/4906586
const path = require("path");

module.exports = {
  // // Starting with https://github.com/vuejs/vue-cli/issues/2208, it appears that
  // // /home/circleci/repo/node_modules/thread-loader/dist/WorkerPool.js:118:20
  // // does not support multi-threading in CircleCI for private repositories.
  // //
  // // `parallel` can now be a number with
  // // https://github.com/vuejs/vue-cli/pull/3864/files#diff-3dfa5b82ba8aa234491c33857207126bL41
  // // as required by https://github.com/vuejs/vue-cli/issues/3850
  // parallel: 1,
  // publicPath: process.env.PUBLIC_PATH || "",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    }
  },
  css: {
    loaderOptions: {
      // https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
      scss: {
        prependData: `@import "~@/styles/_variables.scss";`
      }
    }
  }
};
