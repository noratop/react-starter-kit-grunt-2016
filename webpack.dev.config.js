var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:42000',
    'webpack/hot/only-dev-server',
    './src/assets/js/main'
  ],
  output: {
    path: './src/assets/js',
    filename: 'app-bundle.js',
    publicPath: '/assets/js/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules','bower_components', './src/assets/js']
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
  ],
  module: {
    preLoaders: [
      {
        test: /src\/.*\.jsx?$/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ],
    loaders: [
      {
        test: /src\/.*\.jsx?$/,
        loaders: ['react-hot']
      }
    ]
  },
  devtool: 'source-map',
  debug: true
};
