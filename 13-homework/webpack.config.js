const path = require("path");
const HTMLWebpackPlugin = require ("html-webpack-plugin");
const{CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
     path: path.resolve(__dirname, "dist"),
     filename: "bundle.js",
     assetModuleFilename: "[name][ext]"
    },
    devServer: {
        port: 8080
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
   
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 
                    "css-loader",
                    "sass-loader"]
            },
              {
                test: /\.(png|jpe?g|svg|gif)$/i,
                type: "asset/resource",
               
               },
               {
                test: /\.mp3$/,
                type: "asset/resource",
              },
              {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    }
}