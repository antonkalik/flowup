const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const safeParser = require('postcss-safe-parser');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessor: require('cssnano'),
                parser: safeParser
            })
        ],
        splitChunks: {
            cacheGroups: {
                styles: {
                name: 'styles',
                test: /\.css$/,
                chunks: 'all',
                enforce: true
                }
            }
        }
    }
});