export default {
    actions: {
        async fetchPosts({ commit }, val) {
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/posts?_limit=' + val
            )
            const posts = await res.json()

            commit('updatePost', posts)
                // axios('https://jsonplaceholder.typicode.com/posts?_limit=' + val, {
                //         method: 'GET'
                //     })
                //     .then((posts) => {
                //         commit('updatePost', posts)
                //     })
        }
    },
    mutations: {
        updatePost(state, posts) {
            state.posts = posts
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost)
        }
    },
    state: {
        posts: []
    },
    getters: {
        getValidPosts(state) {
            return state.posts.filter(p => {
                return p.title && p.body
            })
        },
        getAllPosts(state) {
            return state.posts
        },
        getPostsCount(state, getters) {
            return getters.getValidPosts.length
        }
    }
}