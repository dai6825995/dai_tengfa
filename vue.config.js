const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:'http://192.168.205.100:4567'
    // proxy:'http://127.0.0.1:4567'   //本地
  }
})
