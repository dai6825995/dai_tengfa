<template>
  <div class="buy-sift-div">
    <div class="sift-div-list">
      <div>更多：</div>
      <SearchMore :more='more' v-for="(more, key) in more_screen" :key="key"></SearchMore>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import SearchMore from './searchMore.vue'
const route = useRoute();
const router = useRouter();

// #region 获取更多的筛选条件
let more_screen = ref([]);
axios("/api/tfcar/car/moreScreen").then((res) => {
  more_screen.value = res.data.data;
  //   处理数据，转json
  for (const key in more_screen.value) {
    more_screen.value[key].forEach((e) => {
      e.queryRules = JSON.parse(e.queryRules);
    });
  }
  console.log(more_screen.value);
});
// #endregion





</script>

<style>
</style>