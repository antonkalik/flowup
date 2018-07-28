const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/main.[chunkhash].js',
        chunkFilename: 'js/chunk.[chunkhash].js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { 
                            minimize: true 
                        }
                    }
                ]
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                        plugins: (function () {
                                return [
                                    require('autoprefixer')
                                ];
                            })
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif|svg|ico)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'picture.[name].[hash].[ext]',
                        outputPath: 'images/'
                    }
                }]
            },  
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                loader: 'file-loader',
                options: {
                        name: 'fonts/font.[name].[hash].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: 'public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash].css"
        })
    ]
}