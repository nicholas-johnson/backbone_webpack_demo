module.exports = {
  entry: "./source/app.js",
  output: {
    filename: "./build/app.js",
  },
  sourceMap: true,
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
}
