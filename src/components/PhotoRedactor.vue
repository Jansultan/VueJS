<template>
  <div class="container">
    <div class="flex">
      <div class="img-wrapper">
        <img
          src="../assets/images/1.jpg"
          alt=""
          v-if="isCatVisible"
          :class="[imgFilters]"
          :style="imgStyle"
        />
        <!-- <p v-else>Кот скоро вернется</p> -->
      </div>
      <div class="controls">
        <h1>Шаверма кот</h1>
        <button @click="isCatVisible = !isCatVisible">показать / скрыть</button>
        <h2>Фильтры</h2>
        <div>
            <button type="button" 
            @click="imgFilters.sepia = !imgFilters.sepia"
            :class="imgFilters.sepia ? 'active':''">
          сепия
        </button>
        <button type="button" 
            @click="imgFilters.border = !imgFilters.border"
            :class="imgFilters.border ? 'active':''">
          рамка
        </button>
        <button type="button" 
            @click="imgFilters.small = !imgFilters.small"
            :class="imgFilters.small ? 'active':''">
          уменшить
        </button>
        </div>
        <h2>Размер</h2>
        <div>
            <label>
                Ширина: {{imgSizes.currentWidth}}
                <input type="range"
                    :value="imgSizes.currentWidth"
                    @input="imgSizes.currentWidth = $event.target.value"
                    :min="imgSizes.minWidth"
                    :max="imgSizes.maxWidth">
            </label>
             <label>
                Высота: {{imgSizes.currentHeight}}
                <input type="range"
                    :value="imgSizes.currentHeight"
                    @input="imgSizes.currentHeight = $event.target.value"
                    :min="imgSizes.minHeight"
                    :max="imgSizes.maxHeight">
            </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoRedactor",
  data() {
    return {
      isCatVisible: true,
      imgFilters: {
        sepia: false,
        border: false,
        small: false,
      },
      imgSizes:{
          maxWidth: 640,
          maxHeight: 480,
          currentWidth: 640,
          currentHeight: 480
      }
    };
  },
  computed:{
      imgStyle(){
          return{
              width: `${this.imgSizes.currentWidth}px`,
              height: `${this.imgSizes.currentHeight}px`
          }
      }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 40px;
}
.flex {
  display: flex;
  .controls {
    margin-left: 20px;
    h2{
        margin-top: 10px;
    }
  }
  .img-wrapper {
    width: 640px;
    height: 480px;
    background-color: #cecece;
  }
  img {
    width: 100%;
    height: 100%;
    transition: 0.2s ease;
    &.sepia {
      filter: sepia(100%);
    }
    &.border {
      border: 5px dashed #464646;
    }
    &.small {
      width: 400px;
    }
  }
  button {
    margin-right: 10px;
    &.active {
      background-color: #dbdbdb;
    }
  }
  h2 {
    margin-bottom: 10px;
  }
  .btn-group {
    margin-bottom: 20px;
  }
  input[type="range"] {
    display: block;
  }
}
</style>
