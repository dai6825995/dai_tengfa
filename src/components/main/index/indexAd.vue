<template>
  <a class="news-item" v-for="news in newsList" :key="news.id">
    <img :src="news.cover" alt="新闻首图" class="news-img" />
    <div class="news-item-info">
      <div class="news-item-title news-title1">
        {{ news.title }}
      </div>
      <div class="news-item-title news-title2">
        {{ news.simple }}
      </div>
      <div class="news-num">
        <!--                        <div>阅读量：0</div>-->
        <div>{{ newsTime(news.ctime) }}</div>
      </div>
    </div>
  </a>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
let newsList = ref([]);
axios("/api/tfcar/website/indexNews").then((res) => {
  console.log(res);
  newsList.value.push(res.data.data[0]) ;
  newsList.value.push(res.data.data[1]) ;
});
// 时间戳
let newsTime = (ctime) => {
  return ctime.split("T")[0];
};
</script>

<style scoped>
.news-item {
  width: 380px;
  height: 488px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #f5f7fe;
  margin-right: 30px;
  margin-bottom: 70px;
}
.news-img {
  width: 380px;
  height: 285px;
  border-radius: 8px;
}
.news-item-info {
  margin: 20px;
}
.news-title1 {
  font-size: 18px;
  line-height: 26px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 14px;
  height: 52px;
}
.news-title2 {
  font-size: 14px;
  color: #666666;
  line-height: 20px;
  height: 40px;
  margin-bottom: 26px;
}
.news-num {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #999999;
  font-size: 12px;
  line-height: 20px;
}
</style>