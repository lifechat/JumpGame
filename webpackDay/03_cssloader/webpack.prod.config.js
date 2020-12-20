module.exports = {
    // 入口
    entry: {
        //可以有多个入口，也可以只有一个
        // 如果一个，就默认从这一个开始分析
        'main': './main.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]

    },
    // 输出文件
    output: {
        filename: './build.js'
    },
}