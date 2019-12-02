import axios from 'axios'
let http = axios.create({
    // baseURL: '' // 打包之前这个位置需要写成
    params: {
        t: Math.random()
    }
})

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    if (config.data) {
        // 在发送请求之前做些什么
        console.log(config);
        // let data = JSON.parse(config.data)
        config.data.token = localStorage.getItem('token')
        // config.data = JSON.stringify(data)
    } else {
        config.params.token = localStorage.getItem('token')
    }

    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default http;