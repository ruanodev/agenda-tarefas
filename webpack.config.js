const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'index_bundle.js',
          publicPath: '/'
        },
    
  module:{
   rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {loader: "babel-loader"}
            }, 
            
            {
              test: /\.html$/,  //arquivos que terminarem com “.html” ele deve usar o “html-loader”. 
              use: [{loader: "html-loader"}]
            },
            
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"],
            },
                                  
          ]
        },

  devServer: {
          historyApiFallback: true,
      },     

plugins: [
    new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html"
    })
 ]
};
