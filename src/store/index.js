import toDoList from './modules/toDoList'
import { createStore } from 'vuex'

export default createStore({
    modules: {
        toDoList
    }
})