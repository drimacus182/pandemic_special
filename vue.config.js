module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/d/snippets/pandemic_special/'
    : '/',

  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
    },

    index_build: {
      entry: 'src/main.js',
      template: 'public/index_build.html'
    }

  },

  // chainWebpack: config => {
  //   config
  //     .plugin('html')
  //     .tap(args => {
  //       // console.log(args[0])
  //       // args[0].inject = false;
  //       return args
  //     })

  // },

  // chainWebpack: config => {
  //   config.module
  //     .rule('pages')
  // }
}