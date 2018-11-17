var htmlPlugin=require("html-webpack-plugin");
module.exports={
    entry:"assets/js/main.js",
    output: {

        filename: "Main.min.js"
    },
    module: {
        rules: [

            // 加载css
            {
                test: /\.css$/,
                use: [
                    'style-loader', // 将js中的css动态插入到DOM中
                    'css-loader' // 将css加载到打包的js中
                ]
            },
            // 加载图片
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        // 根据模板生成html(自动引入js/css)
        new htmlPlugin({
            filename: 'index.html', //生成文件
            template: 'index.html', //模板文件
            inject: true //自动注入js/css
        })
    ]
};
