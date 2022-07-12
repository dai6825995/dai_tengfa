<template>
    <a class="list-item" v-for="item in contentList" :key="item.ind">
      <div class="list-item-img">
        <img  width="275"
          height="208" :src=item.cover />
        <div class="item-type type-re">限时特惠</div>
      </div>
      <div class="item-info">
        <div class="item-info-title">{{item.carName}}</div>
        <div class="item-info-time">2019年01月 / {{item.mileage}}万公里</div>
        <div class="item-info-price">
          <span class="price1">{{item.currentPrice}}万</span>
        </div>
      </div>
    </a>
</template>

<script setup>
import {defineProps} from 'vue'
defineProps(['contentList'])
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
</style>