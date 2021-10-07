import { SET_TO_DO_LIST } from "../mutation-types"
import axios from "axios"
const state = () => {
    return {
        list: []
    }
}
const getters = {
    getList: state => {
        return state.list
    }
}
const mutations = {
    [SET_TO_DO_LIST](state, payload) {
        state.list = payload
    }
}
const actions = {
    async setToDoList (context, payload) {
        let list = { ...payload }
        const res = await axios.post('https://to-do-list-cf358-default-rtdb.firebaseio.com/toDoList.json', list)
        return res
    },
    async getToDoList () {
        const res = await axios.get('https://to-do-list-cf358-default-rtdb.firebaseio.com/toDoList.json')
        return res
    },
    async delToDoList (context, id) {
        console.log(id)
        const res = await axios.delete(`https://to-do-list-cf358-default-rtdb.firebaseio.com/${id}.json`)
        return res
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
