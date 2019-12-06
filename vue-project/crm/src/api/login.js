import http from './http.js'

let that = null;
export function init(_this) {
    that = _this;
}
export function login(option) {
    return http.post('user/login', option).then(data => {
        if (data.code === 1) {
            that.$alert('用户名密码错误', '提示', {
                confirmButtonText: '确定',
                // center: true
                // callback: action => {
                //     this.$message({
                //         type: 'info',
                //         message: `action: ${action}`
                //     });
                // }
            });
        }
        if (data.code === 0) {
            localStorage.setItem('power', data.power)
        }
        return data // 给后边then的参数

    })
}

export function signOut() {
    return http.get('/user/signout')
}