module.exports = {
  devServer: {
    port: 3030,
    open: true, //自动打开游览器
    // proxyTable:{
    //   '/api':{
    //     target:'http://localhost:3030',
    //     pathRewrite:{
    //       '^api':'/static/mock'
    //     }
    //   }
    // }
  },
};
