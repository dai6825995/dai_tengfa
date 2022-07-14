<template>
  <div class="detail-div" id="ershou3">
    <div class="option-title">
      <div class="option-line"></div>
      车辆图片
    </div>
    <div class="detail-photos">
      <img v-for="(src, index) in detilImgList" :src="src" :key="index" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps(["detilImgList"]);
</script>

<style scoped>
.option-title {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 20px;
}
.option-line {
  width: 10px;
  height: 30px;
  background: #5685fe;
  margin-right: 20px;
}
.detail-photos {
  width: 100%;
  height: auto;
  padding-bottom: 120px;
  display: flex;
  flex-wrap: wrap;
}
.detail-photos > img:nth-child(2n-1) {
  margin-right: 20px;
}
.detail-photos > img {
  width: 590px;
  height: 394px;
  border-radius: 4px;
  margin-bottom: 20px;
}
</style>