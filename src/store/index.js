import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import example from '../store/example.js'

export default new Vuex.Store({
    modules: {
        example,
    }
})