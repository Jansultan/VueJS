<template>
  <div class="product-card">
    <img :src="imgurl" width="300" alt="" />
    <div class="product-card_info">
      <h2>{{ title }}</h2>
      <p class="prcie">{{ price }} тг</p>
      <p class="count">Доступно для доставки {{ count }} шт.</p>
      <button type="button" @click="addtobasket">Добавить корзина</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    title: {
      type: String,
      validator(value) {
        return value.length < 50;
      },
    },
    price: {
      type: Number,
      required: true,
    },
    imgurl: {
      type: String,
      default:
        "https://tryndiani.com.ua/img/latunnyy_dekor/khresty_z_rozpyattyam/1.jpg",
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    addtobasket() {
      this.$emit("addtobasket");
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  border: 1px solid rgb(211, 211, 211);
  padding: 20px 15px;
  width: 340px;
  height: auto;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 200px;
  }

  &_info {
    margin-top: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    h2,
    .price {
      font-weight: 500;
    }
    .count {
      color: rgb(143, 143, 143);
    }
    button {
      background-color: rgb(221, 56, 56);
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 8px 14px;
      display: block;
      cursor: pointer;
      margin-top: auto;
    }
  }
}
</style>