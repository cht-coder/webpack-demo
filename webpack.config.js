const terserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: "production",
  devtool: "source-map",
  optimization: {
      minimizer: [
          new terserPlugin({
              terserOptions: {
                 module: true,
                  output: {
                      quote_style: 1,
                      ie8: true,
                      
                  },
                  mangle: {
                    toplevel: true,
                    properties: true,
                    keep_fnames: false,
                    keep_classnames: false,
                  },
                
              },
              
          })
      ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ]
  },
};
