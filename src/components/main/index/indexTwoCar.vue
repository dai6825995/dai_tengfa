<template>
  <div class="page_box">
    <IndexTitle :url='"/twocar"'>二手车</IndexTitle>
    <div class="list">
      <IndexTwoItem :contentList='contentList'></IndexTwoItem>
    </div>
    <IndexTitle :url='"/newcar"'>新车</IndexTitle>
    <div class="list"></div>
    <IndexTitle :url='"/"'>新闻资讯</IndexTitle>
     <div class="list">
      <IndexAd></IndexAd>
     </div>
    
  </div>
</template>

<script setup>
import IndexTitle from "./indexTitle.vue";
import IndexTwoItem from "./indexTwoItem.vue";
import IndexAd from "./indexAd.vue";
import axios from "axios";
import { ref } from "vue";
let contentList = ref([]);
axios("/api/tfcar/car/list?").then((res) => {
  // console.log(res);
  contentList.value = res.data.data.content;
});
</script>

<style scoped>
.list {
  padding: 30px 0 70px 0;
  display: flex;
  flex-wrap: wrap;
}
</style>