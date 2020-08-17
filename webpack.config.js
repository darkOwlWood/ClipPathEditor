const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname,'src','index.js'),
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle-[hash].js',
        publicPath: '/',
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: path.resolve(__dirname, '/node_modules/') ,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: miniCssExtractPlugin.loader 
                    },
                    'css-loader',
                    'sass-loader',
                ]
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname,'public','index.html'),
            filename: 'index.html',
        }),
        new miniCssExtractPlugin({
            filename: 'bundle-[hash].css',
        }),
        new webpack.DllReferencePlugin({
            manifest: require("./DLL/modules-manifest.json"),
        }),
    ],
}