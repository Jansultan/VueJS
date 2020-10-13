<template>
    <form @submit.prevent="submit">
        <input type="text" placeholder="title" v-model="title">
        <input type="text" placeholder="body" v-model="body">
        <button type="submit">Create post</button>
    </form>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    data(){
        return{
            title:'',
            body:''
        }
    },
    methods:{
        ...mapMutations(['createPost']),
        submit(){
            this.createPost({
                title: this.title,
                body: this.body,
                id: Date.now()
            });
            this.title = this.body = '';
        }
    }
}
</script>

<style lang="scss" scoped>
input{
    display: block;
    width: 400px;
    border: 1px solid #cccccc;
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 10px;
}
</style>