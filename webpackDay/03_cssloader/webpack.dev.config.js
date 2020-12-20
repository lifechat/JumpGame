module.exports = {
    // 入口
    entry: {
        //可以有多个入口，也可以只有一个
        // 如果一个，就默认从这一个开始分析
        'main': './main.js'
    },
    // 输出文件
    output: {
        filename: './build.js'
    },
    //声明模块,
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(jpg|png|gif|svg)$/, loader: 'url-loader?limit=12230' }
        ]
    },
    watch: true, //监听文件发生改动，自动产出build.js
}