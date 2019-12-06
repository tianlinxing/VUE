import { getDpList, getUserList, getJobList } from '@/api/index.js'
export function changeDpList({ commit }) {
    getDpList().then(data => {
        if (data.code === 0) {
            commit('changeDpList', {
                data: data.data
            })
        }
    })
}

export function changeUserList({ commit }, option={}) {
    getUserList(option).then(data => {
        if (data.code === 0) {
            commit('changeUserList', {
                data: data.data
            })
        }
    })
}

export function changeJobList({ commit }) {
    getJobList().then(data => {
        if (data.code === 0) {
            commit('changeJobList', {
                data: data.data
            })
        }
    })
}