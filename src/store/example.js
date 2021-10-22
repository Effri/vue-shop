export default {
    state: {
        message: 'Hello Vuex'
    },
    mutations: {},
    // async 
    actions: {},
    getters: {
        getMessage (state) {
            return state.message
        }
    },
}