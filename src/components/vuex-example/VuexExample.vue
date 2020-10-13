<template>
    <div class="container">
        <post-form></post-form>
        <h1>{{postsCount}}</h1>
        <div class="post" v-for="post in allPosts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import PostForm from './PostForm'

export default {
    // computed:{
    //     allPosts(){
    //         return this.$store.getters.allPosts;
    //     }
    // },
    components:{PostForm},
    computed: {
        ...mapGetters({
            allPosts: 'getValidPosts', 
            postsCount: 'getPostsCount'
        })
    },
    methods: {
        ...mapActions({
            fetchPosts: 'fetchPosts'
        })
    },
    async mounted(){
        this.fetchPosts(5)
    }
}
</script>

<style lang="scss" scoped>
.post{
    border: 1px solid #cccccc;
    border-radius: 5px;
    margin-bottom: 1rem;
    padding: 10px;
}
</style>
