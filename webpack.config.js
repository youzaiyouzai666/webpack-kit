var path              = require('path');
var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

//地址准备
var ROOT_PATH  = path.resolve(__dirname);
var APP_PATH   = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry  : {
        vendor: ['jquery'],
        app   : path.resolve(APP_PATH, 'index.js')
    }

    ,
    output   : {
        path    : BUILD_PATH,
        filename: 'bundle.js'
    },
    devServer: {
        host              : 'localhost',
        port              : 3000,
        historyApiFallback: true,
        hot               : true,
        inline            : true,
        progress          : true,
    },
    module   : {
        loaders: [
            {
                test   : /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: APP_PATH
            },
            {
                test   : /\.js$/,
                loader : 'babel',
                include: APP_PATH,
                query  : {
                    presets: ['es2015']
                }
            },
        ]
    },
    plugins  : [
        new HtmlWebpackPlugin({
            title: 'test'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name    : "common",
            filename: "js/common.js",
            chunks  : ['index', 'detail']
        }),
    ]
};

