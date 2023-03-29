const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';
const PugPlugin = require('pug-plugin');

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    index: path.resolve(__dirname, './src/views/index.pug'),
  },
  output: {
    path: path.join(__dirname, 'docs/'),
    publicPath: '/',
    filename: 'assets/[name].[contenthash:8].css'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.pug$/,
        loader: PugPlugin.loader
        //☝🏽 Load Pug files
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new PugPlugin({
      pretty: true,
    })
  ],
};
