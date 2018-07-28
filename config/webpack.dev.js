const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    watch: true,
    devtool: '#@eval-source-map',
    devServer: {
        historyApiFallback: true,
        compress: true,
        port: 9999
    }
});