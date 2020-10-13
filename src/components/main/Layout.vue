<template>
  <div class="films-layout">
    <app-header />
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './Header'

export default {
  components: { AppHeader }
}
</script>
