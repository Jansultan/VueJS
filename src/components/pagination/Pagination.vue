<template>
    <div class="container">
        <p>участников: {{users.length}}</p>
        <ul>
            <li v-for="(user, index) in users" :key="index">
                {{`${index + 1} ${getFullName(user)}`}}
            </li>
        </ul>
        <div>
            <button type="button" @click="currentPage--">prev</button>
            <button type="button" 
                v-for="page in pages" 
                :key="page"
                @click="currentPage = page">{{page}}</button>
            <button type="button" @click="currentPage++">next</button>
        </div>
        <p>Страница {{ currentPage }} из {{ pages }}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            users:[
                {
                    fname:'Zhansultan',
                    sname:'Shagdatuly',
                    lname:'Tileubayev'
                },
                {
                    fname:'Zhansultan',
                    sname:'Shagdatuly',
                    lname:'Tileubayev'
                },
                {
                    fname:'Zhansultan',
                    sname:'Shagdatuly',
                    lname:'Tileubayev'
                }
            ],
            pages:3,
            currentPage:1,
        }
    },
    methods:{
        loadUsers(page){
            console.log(page)
        },
        getFullName(user){
            return `${user.fname} ${user.sname} ${user.lname}`.toUpperCase()
        }
    },
    watch:{
        currentPage(page){
            this.loadUsers(page)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
