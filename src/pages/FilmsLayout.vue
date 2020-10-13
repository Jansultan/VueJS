<template>
  <div class="films-layout">
    <main-header />
    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from '../components/films/MainHeader'
import {mapActions} from 'vuex'

export default {
  components: { MainHeader },
  methods:{
    ...mapActions({
      load: 'reactions/loadReactions'
    })
  },
  created(){
    this.load(1000)
  }
}
</script>

<style lang="scss" scoped>
.films-layout{
  background: #000000
}
</style>