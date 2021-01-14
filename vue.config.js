module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/d/snippets/pandemic_special/'
    : '/',

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        // console.log(args[0])
        // args[0].inject = false;
        return args
      })

  },
}