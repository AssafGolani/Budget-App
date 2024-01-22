const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    mode: isProduction ? 'production' : 'development', // Set mode based on environment
    entry: './src/app.js',
    output: {
      path: path.resolve(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.s?css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css',
      }),
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'public'),
      },
      historyApiFallback: true,
    },
  };
};
