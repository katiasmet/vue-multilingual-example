const path = require('path')

module.exports = {
  baseUrl: '/',

  runtimeCompiler: true,

  /* Your local apache`` server */
  devServer: {
    proxy: {
      '/api': {
        target: 'http://vue.meetup.lunar/',
        ws: true,
        changeOrigin: true
      },

      '/assets': {
        target: 'http://vue.meetup.lunar/',
        ws: true,
        changeOrigin: true
      }
    }
  },

  configureWebpack: {
    devtool: 'source-map'
  },

  /* Folder where all your assets are build */
  outputDir: './build',

  /* File where all your index is build */
  indexPath: process.env.NODE_ENV === 'production'
    ? path.resolve(__dirname, './build/index.html')
    : 'index.html',

  css: {
    sourceMap: true
  }
}
