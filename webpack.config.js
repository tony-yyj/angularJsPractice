const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
    mode: "development",
    entry: './src/app/app.js',
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            title: 'out put manage',
            template: "./src/index.html"
        })
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(html)$/, use: 'html-loader',
            }
        ]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "dist.bundle.js"
    }
};