const path = require('path');
const isProduction = process.env.NODE_ENV === 'production';
const PugPlugin = require('pug-plugin');

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    index: path.resolve(__dirname, './src/views/index.pug'),
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.pug$/,
        loader: PugPlugin.loader
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webmanifest)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new PugPlugin({
      pretty: true,
      css: {
        filename: '[name].[contenthash:8].css',
      },
    })
  ],
};
