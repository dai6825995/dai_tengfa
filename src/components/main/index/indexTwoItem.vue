<template>
  <a class="list-item" v-for="item in contentList" :key="item.ind">
    <div class="list-item-img">
      <img width="275" height="208" :src="item.cover" />
     
      <div
        :class="{
          'item-type': true,
          'type-or': item.saleType == 0,
          'type-bl': item.saleType == 1,
          'type-re': item.saleType == 2,
        }"
      >
      {{saleName(item.saleType)}}
      </div>
    </div>
    <div class="item-info">
      <div class="item-info-title">{{ item.carName }}</div>
      <div class="item-info-time">
        {{ timeStr(item) }} / {{ item.mileage }}万公里
      </div>
      <div class="item-info-price">
        <span class="price1">{{ item.currentPrice }}万</span>
      </div>
    </div>
  </a>
</template>

<script setup>
import { computed, defineProps } from "vue";
defineProps(["contentList"]);

// 时间戳转文字
const timeStr = (item) => {
  let date = new Date(item.dateOfRegistration);
  let y = date.getFullYear();
  let m =
    date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1;
  return y + "年" + m + "月";
};

// 分类   saleType 0:腾发自营  1:车主自营  2:限时特惠
const saleName=(saleType)=>{
  switch (saleType) {
    case 0:
      return '腾发自营'
    case 1:
      return '车主自营'
    case 2:
      return '限时特惠'
  
    default:
      return '暂无分类'
  }
}
</script>

<style scoped>
.list-item {
  display: block;
  width: 277px;
  height: 358px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #f5f7fe;
  box-sizing: border-box;
  margin-right: 30px;
  margin-bottom: 30px;
  position: relative;
}
.list-item-img {
  width: 275px;
  height: 208px;
  position: relative;
}
.list-item-img img {
  border-radius: 8px 8px 0px 0px;
}
.type-re {
  background: linear-gradient(90deg, #ff1766 0%, #ff2a23 100%);
}
.item-info {
  margin-top: 20px;
  margin-left: 10px;
  font-size: 18px;
}
.item-info-title {
  width: 257px;
  line-height: 26px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 10px;
}
.item-info-time {
  font-size: 14px;
  color: #999999;
  line-height: 20px;
  margin-bottom: 20px;
}
.item-info-price {
  display: flex;
  align-items: center;
  color: #e73424;
  font-size: 12px;
}
.price1 {
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  margin-right: 10px;
}
.item-type {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 12px;
  width: 64px;
  height: 20px;
  border-radius: 0px 4px 4px 0px;
}
.list-item:nth-child(4n) {
  margin-right: 0;
}
.type-or {
  background: linear-gradient(90deg, #ff8856 0%, #ff4725 100%);
}
.type-bl {
    background: linear-gradient(90deg, #5F98F6 0%, #2E68EB 100%);
}
.list-item:hover {
    box-shadow: 0px 2px 20px 0px rgb(170 170 216 / 40%);
}
</style>