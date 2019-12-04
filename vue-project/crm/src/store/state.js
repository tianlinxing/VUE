let departmentList = JSON.parse(localStorage.getItem('departmentList'))
let userList = JSON.parse(localStorage.getItem('userList'))
export default {
    departmentList: departmentList || [], // 存储的是部门列表数据
    userList: userList || [],
}