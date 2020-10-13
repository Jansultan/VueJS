<template>
  <div class="product-list container">
    <div class="flex top-information">
      <h1>Письменные столы {{ searchText }}</h1>
      <search @search="searchProducts" />
      
      
    </div>
    <ul class="list-default flex">
        <li v-for="(product, index) in products" :key="index">
          <product-card
            :title="product.title"
            :price="product.price"
            :imgurl="product.imgurl"
            :count="product.count"
            @addtobasket="addToBasket(index)"
          />
        </li>
      </ul>
  </div>
</template>

<script>
import ProductCard from "./ProductCard";
import Search from './Search';

export default {
  name: "ProductList",
  components: {
    ProductCard,
    Search
  },
  data() {
    return {
      searchText: '',
      products: [
        {
          title: "Стол Jim",
          price: 19999,
          imgurl:
            "https://hoff.ru/upload/iblock/c5f/c5f50c7f2642ef0c3b2426f3193172db.jpg",
          count: 30,
        },
        {
          title: "Стол Monako",
          price: 17199,
          imgurl:
            "https://euromebel.kz/upload/resize_cache/iblock/858/940_640_0ce6f211fbe1684de17c1bcd584296260/00018779_00_21.jpg",
          count: 20,
        },
        {
          title: "Стол с двумя яшками Кварт MD 768",
          price: 10999,
          imgurl:
            "https://hoff.ru/upload/iblock/119/11926e176cff30f66d00803cb02d0342.jpg",
          count: 23,
        },
      ],
    };
  },
  methods: {
    addToBasket(index) {
      console.log(index);
    },
    searchProducts(searchText){
      console.log(searchText)
    }
  },
};
</script>

<style lang="scss" scoped>
li {
  margin-right: 20px;    
  display: flex;
}
.top-information {
  align-items: center;
  margin-bottom: 22px;
  h1 {
    margin-bottom: 0;
  }
  button {
    background-color: rgb(221, 56, 56);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 8px 14px;
    display: block;
    cursor: pointer;
    margin-left: 10px;
  }
}
</style>