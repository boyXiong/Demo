const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['babel-polyfill', './src/app.js'],
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0'], 
                    cacheDirectory: true,
                    // "plugins": [
                    //     ["transform-runtime", {
                    //         "polyfill": false,
                    //         "regenerator": true
                    //     }]
                    // ]
                }  // 解析的顺序很重要
            },
            {
                test: /\.less$/,
                loader: 'less-loader' 
            },
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.css$/, // Only .css files
                use: [ 'style-loader', 'css-loader' ]
            },
            {   
                test: /\.(eot|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            { test: /\.(jpg|png|gif|bmp|jpeg)$/,//正则表达式匹配图片规则
                use: [{
                loader:'url-loader',
                options:{
                    limit:8192,//限制打包图片的大小：
                    //如果大于或等于8192Byte，则按照相应的文件名和路径打包图片；如果小于8192Byte，则将图片转成base64格式的字符串。
                    name:'img/[name]-[hash:8].[ext]',//images:图片打包的文件夹；
                    //[name].[ext]：设定图片按照本来的文件名和扩展名打包，不用进行额外编码
                    //[hash:8]：一个项目中如果两个文件夹中的图片重名，打包图片就会被覆盖，加上hash值的前八位作为图片名，可以避免重名。
                }
            }]}
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html"
        })
    ],
    devtool: 'inline-source-map',
    // devServer: {      //服务器配置
    //     host: '0.0.0.0',  //允许局域网外部访问
    //     contentBase: './dist',   //告诉服务器从哪里提供内容
    //     port: 3000,
    //     historyApiFallback: true,  // BrowserRouter， 这个配置后 才可以使用  the default browser full page refresh on form submission and link change 改变
    // }
};
