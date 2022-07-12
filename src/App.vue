<template>
  <div class="page">
    <Header @setiShow="setiShow" :selCityName="selCityName"></Header>
    <router-view></router-view>
    <Foot></Foot>
    <City
      :class="{ iShow: isshow }"
      @setiShow="setiShow"
      @setCityName="setCityName"
    ></City>
    <div id="mode" :class="{ iShow: isshow }"></div>
  </div>
</template>

<script setup>
import Header from "./components/header/header.vue";
import City from "./components/header/city.vue";
import Foot from "./components/foot/foot.vue";
import { ref } from "vue";

// 控制是否展示城市窗口
let isshow = ref(true);
function setiShow() {
  isshow.value = !isshow.value;
  console.log(isshow.value);
}

// 显示最终确认的城市
let selCityName = ref("全部");
const setCityName = (val) => {
  selCityName.value = val;
};
</script>



<style scoped>
.page_box {
  margin-top: 70px;
}
.iShow {
  display: none;
}
#mode {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 99;
  top: 0;
}
</style>