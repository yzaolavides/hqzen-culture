const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/hqzen-culture/',
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
      },
    },
  },
  lintOnSave: false,
})
