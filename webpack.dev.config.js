var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:{
    "main":'./src/main.js'
  },
  output:{
    path:path.resolve('./dist'), // 相对转绝对
    filename: "build.js"
  },
  // 声明模块 包含各个loader
  module:{
    loaders:[

      // style-loader css-loader
      // npm i css-loader style-loader -D

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      // 加载的图片大小小于limit设置，使用base64编码，可以减少一次图片的请求
      {
        test: /\.(jpg|png|jpeg|gif|svg)$/,
        loader:'url-loader?limit=40000000000000000000000000000000'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }

    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html' // 参照物
    })
  ],
  watch:true
}
