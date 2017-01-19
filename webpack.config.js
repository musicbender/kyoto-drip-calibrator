const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const PATHS = {
    src: './src/index.jsx',
    html: __dirname + '/src/index.html',
    dist: __dirname + '/dist',
    images: __dirname + '/src/assets/images/'
}

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: PATHS.html,
    filename: 'index.html',
    inject: 'body',
    title: 'Cold Drip Coffee Timer'
});

const FaviconsWebpackPluginConfig = new FaviconsWebpackPlugin({
    logo: PATHS.images + 'favicon.png',
    title: 'Cold Drip Timer',
    prefix: 'assets/',
    statsFilename: 'icon-stats.json'
});

const ServiceWorkerWebpackPluginConfig = new ServiceWorkerWebpackPlugin({
    entry: path.join(__dirname, 'src/sw.js'),
    excludes: [
    '**/.*',
    '**/*.map',
    '*.html'
    ]
});

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
  {from: 'src/manifest.json', to: 'manifest.json'}
]);

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
            { test: /\.jsx?$/, include: __dirname + '/src', loader: "babel-loader" },
            { test: /\.scss$/, loader: "style!css!autoprefixer!sass" },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
      FaviconsWebpackPluginConfig,
      HtmlWebpackPluginConfig,
      ServiceWorkerWebpackPluginConfig,
      CopyWebpackPluginConfig
    ],
    watch: true
}

module.exports = config;
