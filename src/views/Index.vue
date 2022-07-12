<template>
  <div class="index-body">
    <div class="body-bg"></div>
    <IndexSearch></IndexSearch>
    <div class="body-car">
      <IndexTwoCar></IndexTwoCar>
    </div>
  </div>
</template>

<script setup>
import IndexSearch from "../components/main/index/indexSearch.vue";
import IndexTwoCar from "../components/main/index/indexTwoCar.vue";
</script>

<style scoped>
.index-body {
  margin-top: 70px;
  width: 100%;
  position: relative;
}
.body-bg {
  width: 100%;
  height: 300px;
  background: url("../assets/img/蓝色背景.png") no-repeat;
  background-position: 50%;
}
.body-car {
  padding-top: 320px;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background: #f9f9f9;
}

</style>