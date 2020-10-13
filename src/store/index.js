import Vue from 'vue'
import Vuex from 'vuex'
import reactions from './modules/reactions'
import posts from './modules/posts'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        reactions,
        posts
    }
})