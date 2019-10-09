const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/App.tsx',
  devtool: 'inline-source-map',
  // watch: 'true', // Let the building process watch for changes
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader'
        },
        resolve: {
          extensions: ['.ts', '.tsx']
        }
      },
      {
        test: /\.jpg$/,
        use: ['file-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        ]
      },
    ]
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/dist',
    filename: 'bundle.js'
  }
};