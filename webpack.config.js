const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.less/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              'lessOptions': {
                javascriptEnabled: true,
                modifyVars: {
                  'primary-color': '#4E6EEB', // 主色
                  'text-color': '#2A3044', // 正文色
                  'text-color-secondary': '#545762', // 副文本色，略浅
                  'heading-color': '#192242', // 标题色，深色
                  'border-color-base': '#E5E5F1', // 边框色
                  'border-radius-base': '4px', // 基本圆角单位
                  'select-selection-item-bg': '#f2f2f8', // select tag 背景色
                  'modal-header-bg': '#f9fafc', // 模态框 header 背景色
                  'label-color': '#545762', // 表单 label 使用副文本色
                  'form-item-label-colon-margin-right': '16px' // form item label 冒号有右边距
                }
              }
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      linkType: false,
      filename: 'antd@4.13.1.1.css'
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  }
}
