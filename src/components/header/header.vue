<template>
  <div class="nav">
    <div class="page_box">
      <div class="navigate">
        <div class="navigate-div">
          <div class="navigate-left">
            <a class="left-img1"
              ><img
                src="@\assets\img\腾发.png"
                alt="腾发首页logo"
                width="100%"
                height="100%"
            /></a>
            <img src="@\assets\img\定位.png" alt="定位图标" class="left-img2" />
            <div
              id="index-address"
              class="left-address"
              city-code="0"
              @click="open"
            >
              {{ selCityName }}
            </div>
          </div>
          <div class="navigate-right">
            <router-link active-class="right-active" to="/index"
              >首页</router-link
            >
            <router-link active-class="right-active" to="/twocar"
              >二手车</router-link
            >
            <router-link active-class="right-active" to="/newcar"
              >新车</router-link
            >
            <router-link active-class="right-active" to="/buycar"
              >卖车</router-link
            >
            <router-link active-class="right-active" to="/finance"
              >腾发金融</router-link
            >
            <router-link active-class="right-active" to="/serve"
              >腾发服务</router-link
            >
            <div class="right-phone">
              咨询电话<span class="phone-num" id="top-phone-num"
                >400-0606-777</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
const emit = defineEmits(["setiShow"]);
defineProps(["selCityName"]);

const open = () => {
  emit("setiShow");
};
</script>

<style scoped>
.nav {
  background-color: #ffffff;
  position: fixed;
  height: 70px;
  top: 0;
  width: 100%;
  z-index: 10;
}
.navigate {
  color: #333333;
  width: 100%;
  height: 70px;
}
.navigate-div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
}
.navigate-left {
  display: flex;
  align-items: center;
  font-size: 14px;
}
.navigate-left .left-img1 {
  width: 130px;
  height: 42px;
  margin-right: 21px;
}
img {
  width: 100%;
  height: 100%;
}
.navigate-left .left-img2 {
  width: 14px;
  height: 14px;
  margin-right: 5px;
}
.navigate-left .left-address {
  cursor: pointer;
}
.navigate-right {
  display: flex;
  font-size: 16px;
}
.navigate-right a {
  margin-right: 50px;
  padding: 12px 0;
  border-bottom: 2px solid transparent;
}

.navigate-right .right-active {
  border-bottom: 2px solid #5685fe;
}
.right-phone {
  padding: 12px 0;
}
.navigate-right .phone-num {
  color: #5685fe;
  margin-left: 4px;
}
</style>