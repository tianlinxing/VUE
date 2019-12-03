module.exports = {
    publicPath: '/',
    devServer: {
        // proxy 代理
        proxy: 'http://localhost:3000'
    },
    // lintOnSave:false,// 不让eslint报错
}