<template>
    <div class="user-card container">
        <h1>Научу зарабатывать от 200 000 тг в час</h1>
        <div class="main-information">
            <img src="../assets/1.jpg" alt="" width="500">
            <div class="info">
                <h2>
                    {{ getAuthFullName }}
                </h2>
                <strong>Бизнес коуч</strong>
                <ul>
                    <li>Учу людей</li>
                    <li>Не знаю что такое</li>
                    <li>Пообещалб что поборюсь</li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'UserCard',
    data(){
        return{
            fname:'Zhansultan',
            sname:'Shagdatuly',
            lname:'Tileubayev',
        }
    },
    computed:{
        getAuthFullName(){
            return `${this.fname} ${this.sname} ${this.lname}`.toUpperCase()
        },
        
    },
    methods:{
    }
}
</script>

<style scoped>
    .main-information{
        display: flex;
    }
    .main-information img{
            margin-right: 22px;
        }
</style>