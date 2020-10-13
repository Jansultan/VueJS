<template>
    <div class="container">
        <input type="text" @input="searchText = $event.target.value">
        <p>Всего имен: {{names.length}}, совпадений: {{getFiltredNames.length}}</p>
        <ul>
            <li v-for="(name, index) in getFiltredNames"
                :key="index">{{ name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            searchText:'',
            names:['Zhansultan', 'Duman', 'Asan', 'Ruslan']
        }
    },
    methods:{
    },
    computed:{
        getFiltredNames(){
            return this.names.filter(name => name.toLowerCase().includes(this.searchText.toLowerCase()))
        }
    }
}
</script>

