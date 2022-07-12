<template>
  <div class="page_box">
    <IndexTitle>二手车</IndexTitle>
    <div class="list">
      <IndexTwoItem :contentList='contentList'></IndexTwoItem>
    </div>
  </div>
</template>

<script setup>
import IndexTitle from "./indexTitle.vue";
import IndexTwoItem from "./indexTwoItem.vue";
import axios from "axios";
import { ref } from "vue";
let contentList = ref([]);
axios("/api/tfcar/car/list?").then((res) => {
  console.log(res);
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