import http from './http.js'
export function judgeLogin() {
    return http.get('/user/login').then(data => {
        return data.code == 0
    })
}

// 请求部门列表数据
export function getDpList() {
    return http.get('/department/list')
}

// 删除部门列表中的数据
export function delDpList(departmentId) {
    return http.get('/department/delete', {
        params: { departmentId }
    })
}

// 新增部门接口
export function addDpList(option) {
    return http.post('/department/add', option)
}

// 更新部门接口
export function updateDpList(option) {
    return http.post('/department/update', option)
}

// 获取用户列表
export function getUserList(option) {
    return http.get('/user/list', { params: option })
}