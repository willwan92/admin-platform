const path = require('path')
const name = 'Admin'

module.exports = {
  // TODO: Remember to change publicPath to fit your need
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-typescript-admin-template/' : '/',
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    proxy: {
      '/dev-api': {
        target: 'https://222.128.6.205:10443',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api': '' // rewrite path
        }
      }
    }
  },
  pwa: {
    name: name
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_variables.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss')
      ]
    }
  },
  chainWebpack(config) {
    // provide the app's title in html-webpack-plugin's options list so that
    // it can be accessed in index.html to inject the correct title.
    // https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-plugin
    config.plugin('html').tap(args => {
      args[0].title = name
      return args
    })
  }
}
