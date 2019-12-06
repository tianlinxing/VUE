export function changeDpList(state, option) {
    state.departmentList = option.data // 更新list
    localStorage.setItem('departmentList', JSON.stringify(option.data))
}

export function changeUserList(state, option) {
    state.userList = option.data // 更新list
    localStorage.setItem('userList', JSON.stringify(option.data))
}

export function changeJobList(state, option) {
    state.jobList = option.data // 更新list
    localStorage.setItem('jobList', JSON.stringify(option.data))
}