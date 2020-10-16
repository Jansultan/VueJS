<template>
    <div class="app-tabel-row">
        <div class="row row_name">{{row_users.name}}</div>
        <div class="row row_earned">{{row_users.points_earned}}</div>
        <div class="row row_spent">{{row_users.points_spent}}</div>
        <div class="row row_date">{{row_users.registration_date}}</div>
    </div>
</template>

<script>
export default {
    props:{
        row_users:{
            type: Object,
            default: ()=>{
                return {}
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.app-tabel-row{
    display: flex;
    justify-content: space-around;

    .row{
        flex-basis: 25%;
        padding: 8px 16px;
        text-align: left;
    }
}
</style>