const path = require('path');

const config = {
    mode: process.env.MODE || 'development',
    devtool: 'source-map',
    entry: path.join(__dirname,'/src/App'),
    output: {
        path: path.join(__dirname,'/public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.jsx','.js'],
        modules: [path.join(__dirname,'/src'),'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                use: 'babel-loader'
            }
        ]
    }
}

module.exports = config;