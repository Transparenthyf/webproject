module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'store': '@/store',
        'views': '@/views'
      }
    }
  }
}