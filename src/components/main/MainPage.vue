<template>
  <div class="main-page">
    <h1>
      Материалы Vue.js
    </h1>
    <button type="button" 
      class="btn btn-outline-light" 
      @click="$router.push({ name: 'lessons' })">
      Подробнее
    </button>
  </div>
</template>

<style lang="scss" scoped>
  .main-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #000;
    h1 {
      color: #ffffff;
      font-size: 70px;
      margin-bottom: 20px;
    }
  }
</style>
