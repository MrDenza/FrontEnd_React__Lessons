const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin({
    filename: "style_react.css"
});

module.exports = { 
    entry: ".\\source\\App.js", // основной файл приложения
    output:{ 
        path: __dirname + "\\public\\", // путь к каталогу выходных файлов
        filename: "script_react.js"  // название создаваемого файла 
    }, 
    devtool:'source-map',
    module:{ 
        rules:[
            { 
                test: /\.jsx?$/, // какие файлы обрабатывать
                exclude: /node_modules/, // какие файлы пропускать
                use: { loader: "babel-loader" }
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    use: ["css-loader"]
                })
            }            
        ] 
    },
    plugins: [
        extractCSS
    ]
}