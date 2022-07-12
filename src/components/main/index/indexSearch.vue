<template>
  <div class="body-search">
    <div class="search">
      <img
        src="@/assets/img/卖车的好处.png"
        alt="首页顶部车图"
        class="body-car-img"
      />
      <div class="search-gd">腾发二手车</div>
      <div class="search-sr">
        <input
          type="text"
          placeholder="搜索品牌、车型"
          class="search-input"
          id="search-in"
        />
        <button type="button" class="search-btn" id="search-btn">搜索</button>
      </div>
      <div class="buy-sell">
        <div class="buy">
          <div class="buy-title">
            <div class="search-line"></div>
            <div class="title-text">我要买车</div>
          </div>
          <div class="buy-search">
            <div class="search-div">
              <a
                class="div-brand"
                v-for="(brand, index) in convenient.convenientBrands"
                :key="index"
              >
                <img :src="brand.logo" />
                <span>{{ brand.label }}</span>
              </a>
            </div>
            <div class="search-div">
              <a class="div-price" v-for="(prices, index) in convenient.convenientPrices" :key="index">{{prices.label}}</a>
            </div>
            <div class="search-div">
              <a class="div-price" v-for="(models, index) in convenient.convenientModels" :key="index">{{models.label}}</a>
            </div>
          </div>
        </div>
        <div class="sell">
          <div class="buy-title">
            <div class="search-line"></div>
            <div class="title-text">我要卖车</div>
          </div>
          <div class="sell-container">
            <div class="container-left">
              <div class="container-input">
                <input
                  type="number"
                  placeholder="请输入手机号"
                  id="container-gz-in"
                  maxlength="11"
                />
                <button type="button" id="container-gz-btn">立即估值</button>
              </div>
              <div class="container-gz">
                <a href="/c0/sell.html" class="gz-link">
                  <img src="@/assets/img/上门服务.png" />
                  <span>全国代购</span>
                </a>
                <div class="gz-line"></div>
                <a href="/c0/sell1.html" class="gz-link">
                  <img src="@/assets/img/到店估值.png" />
                  <span>到店估值</span>
                </a>
              </div>
            </div>
            <div class="container-right">
              <img src="@/assets/img/我要卖车.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
let convenient = ref([]);
axios("/api/tfcar/car/convenient").then((res) => {
  convenient.value = res.data.data;
});
</script>

<style src='@/assets/css/indexSearch.css' scoped>
</style>