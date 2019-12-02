import { hotList } from "../api/home";

export function add(store, option) {
    setTimeout(() => {
        store.commit('add', option);
    }, 1000)

}

export function minus({ commit }, option) {
    setTimeout(() => {
        commit('minus', option);
    }, 1000)
}

export function getHotList({ commit }, option) {
    hotList(option).then(data => {
        console.log(data.data.data)
        commit('changeHotList', {
            oldType: option.oldType,
            newType: option.newType,
            data: data.data.data
        })
    })
}