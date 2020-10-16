<template>
    <div class="container app-tabel">
        <p>участников: {{users.length}}</p>
        <div class="app-tabel__header">
            <p @click="sortByName">Name 
                <i class="material-icons">unfold_more</i>
            </p>
            <p @click="sortByPointsEarned">Points earned
                <i class="material-icons">unfold_more</i>
            </p>
            <p @click="sortByPointsSpent">Points spent
                <i class="material-icons">unfold_more</i>
            </p>
            <p @click="sortByDate">Registration date
                <i class="material-icons">unfold_more</i>
            </p>
        </div>
        <user-list
            v-for="user in paginatedUsers"
            :key="user.id"
            :row_users="user"></user-list>

       <div class="app-tabel__pagination">
           <div class="page"
                v-if="hasPrev()"
                @click="prevPage()">
                Пред.
            </div>
            <div class="page"
                v-if="hasFirst()"
                @click="pageClick(1)">
                1
            </div>
            <div class="page_around"
                v-if="hasFirst()">
                ...
            </div>
            <div class="page"
                v-for="page in pages"
                :key="page"
                :class="{'page__selected': pageNumber == page}"
                @click="pageClick(page)">
                {{page}}
            </div>
            <div class="page_around"
                v-if="hasLast()">
                ...
            </div>
            <div class="page"
                v-if="hasLast()"
                @click="pageClick(pagesCount)">
                {{pagesCount}}
            </div>
            <div class="page"
                v-if="hasNext()"
                @click="nextPage()">
                След.
            </div>
        </div>
    </div>
</template>

<script>
import users from '../../mocks/users_list'
import UserList from './UserList'
export default {
    components:{UserList},
    props:{
        pageRanger:{
                type:Number,
                default:2
            }
    },
    data(){
        return{
            users,
            usersPerPage:15,
            pageNumber: 1,
            
        }
    },
    computed:{
        pagesCount(){
            return Math.ceil(this.users.length / 15)
        },
        paginatedUsers(){
            let from = (this.pageNumber - 1) * this.usersPerPage;
            let to = from + this.usersPerPage;
            return this.users.slice(from, to)
        },
        rangeStart(){
            var start = this.pageNumber - this.pageRanger
            return (start>0) ? start : 1
        },
        rangeEnd(){
            let end = this.pageNumber + this.pageRanger
            return (end < this.pagesCount) ? end : this.pagesCount
        },
        pages(){
            var pages = []
            for(var i = this.rangeStart; i<=this.rangeEnd;i++){
                pages.push(i)
            }
            return pages
        }
    },
    methods:{
        // getFullName(user){
        //     return `${user.fname} ${user.sname} ${user.lname}`.toUpperCase()
        // },
        sortByName(){
            this.users.sort((a,b) => a.name.localeCompare(b.name))
        },
        sortByPointsEarned(){
            this.users.sort((a,b) => a.points_earned - b.points_earned)
        },
        sortByPointsSpent(){
            this.users.sort((a,b) => a.points_spent - b.points_spent)
        },
        sortByDate(){
            this.users.sort((a,b) => a.registration_date.localeCompare(b.registration_date))
        },
        pageClick(page){
            this.pageNumber = page;
        },
        hasPrev(){
            return this.pageNumber > 1
        },
        hasNext(){
            return this.pageNumber < this.pagesCount
        },
        prevPage(){
            return this.pageNumber -= 1
        },
        nextPage(){
            return this.pageNumber+=1
        },
        hasFirst(){
            return this.rangeStart !==1
        },
        hasLast(){
            return this.rangeEnd < this.pagesCount
        }
        
    },
}
</script>

<style lang="scss" scoped>
.app-tabel{
    max-width: 900px;
    margin: 50px auto;

    &__header{
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #e7e7e7;
        p{
            display: flex;
            align-items: center;
            flex-basis: 25%;
            text-align: left;
            cursor: pointer;
        }
    }
    &__pagination{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 30px 0;
        .page_around{
            margin-right: 10px;
            display: flex;
            align-items: center;
        }
        .page{
            padding: 8px;
            border: solid 1px #e7e7e7;
            margin-right: 10px;
            &:hover{
                background: #000000;
                color: #ffffff;
                cursor: pointer;
            }
        }
        .page__selected{
            background: #000000;
            color: #ffffff;
            cursor: default;
        }
    }
}
</style>
