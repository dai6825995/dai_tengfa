<template>
  <div class="detail-div" id="ershou4">
    <div class="option-title">
      <div class="option-line"></div>
      同类推荐
    </div>
    <div class="recommend-list">
        <IndexTwoItem :contentList='list'></IndexTwoItem>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import IndexTwoItem from '../index/indexTwoItem.vue'
let route=useRoute()
let router=useRouter()
import axios from "axios";
let list=ref([])
axios(`/api/tfcar/car/similarRecommendation/${route.query.ind}`).then(res=>{
    list.value.push(res.data.data[0])
    list.value.push(res.data.data[1])
    list.value.push(res.data.data[2])
    list.value.push(res.data.data[3])
    // console.log(list.value);
})
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
.recommend-list {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 70px;
}
</style>