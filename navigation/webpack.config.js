const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 8082
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'navigation',
            filename: 'remoteEntry.js',
            exposes: {
                './NavigationIndex': './src/index'
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};