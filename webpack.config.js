const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: './src/index.jsx',
    html: __dirname + '/src/index.html',
    dist: __dirname + '/dist'
}

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: PATHS.html,
    filename: 'index.html',
    inject: 'body'
});

var config = {
    entry: [
        PATHS.src
    ],
    output: {
        path: PATHS.dist,
        filename: 'dist.js'
    },
    module: {
        loaders: [
            {test: /\.jsx?$/, include: __dirname + '/src', loader: "babel-loader"},
            { test: /\.scss$/, loader: "style!css!autoprefixer!sass" },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [HtmlWebpackPluginConfig],
    watch: true
}


module.exports = config;