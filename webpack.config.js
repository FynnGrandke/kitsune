module.exports = {
  mode: 'development',
  entry: './src/App.tsx',
  devtool: 'inline-source-map',
  // watch: 'true', // Let the building process watch for changes
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist',
    filename: 'bundle.js'
  }
}