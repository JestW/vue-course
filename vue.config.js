const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/iview-admin/' : '/'

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件。减少打包的体积
  productionSourceMap: false,
  // 跨域,没有匹配到静态文件的请求都代理到localhost:4000
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
