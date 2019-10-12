const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/App.tsx',
  devtool: 'inline-source-map',
  // watch: 'true', // Let the building process watch for changes
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8080,
    proxy: {
      '/entries': {
        target: 'http://localhost:3000',
        secure: false,
        changeOrigin: true
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node-modules/, /server/],
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
                require('postcss-import'),
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