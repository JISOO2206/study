const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

//public 폴더가 아닌 다른 경로의 index.html 파일로 지정하는 방법

const path = require('path');

module.exports = {
  chainWebpack : config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src/'));
  }
}