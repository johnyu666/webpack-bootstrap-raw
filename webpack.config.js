const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

//htmlPlugin的配置信息
let htmlPluginOptions={}
htmlPluginOptions.title='由HtmlWebpackPlugin生成的网页';
htmlPluginOptions.template="src/assets/template.html";
htmlPluginOptions.info='自定义信息';

module.exports = {
    mode:'development',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "img/[name].[ext]"
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "fonts/[name].[ext]"
                        }
                    },
                ],
            },

            // svg inline 'data:image' loader
            {
                test: /\.svg$/,
                loader: "svg-url-loader"
            },

        ]
    },
    plugins: [new HtmlWebpackPlugin(htmlPluginOptions)]
}