let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

let conf = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                //exclude: '/node_modules/',
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    //fallback: "style-loader",
                    use: 'css-loader'
                })
            },
            {
                test: /\.mp4$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};

module.exports = (env, options) => {
    let production = options.mode === 'production';
    console.log(`Mode: ${options.mode}`)
    conf.devtool = production ? false : 'eval-sourcemap';
    console.log(`Devtool: ${conf.devtool}`)
    console.log(options);
    return conf;
}