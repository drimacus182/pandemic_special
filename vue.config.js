module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/d/snippets/'
    : '/',

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        // console.log(args[0])
        // args[0].inject = false;
        return args
      })

    config.module
      .rule('csv-loader')
      .test(/\.csv$/)
      .use('csv-loader')
        .loader('csv-loader')
        .options({
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        })
  },
}