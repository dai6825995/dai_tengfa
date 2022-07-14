<template>
  <div v-loading.fullscreen.lock="fullscreenLoading"  class="back_color">
    <DtailInfo :detilInfo="detilInfo" :detilInfoImg="detilInfoImg"></DtailInfo>
    <div class="detail-div">
      <DetailBaogao></DetailBaogao>
      <DetailImg :detilImgList="detilImgList"></DetailImg>
      <DetailTuijian></DetailTuijian>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, watch, provide } from "vue";
import { useRoute, useRouter } from "vue-router";
import DtailInfo from "../components/main/details/dtailInfo.vue";
import DetailBaogao from "../components/main/details/detailBaogao.vue";
import DetailImg from "../components/main/details/detailImg.vue";
import DetailTuijian from "../components/main/details/detailTuijian.vue";
const route = useRoute();

let fullscreenLoading=ref(true)

let detilInfo = ref([]);
let detilInfoImg = ref([]);
let detilImgList = ref({});
const getDetail = () => {
  axios(`/api/tfcar/car/basicInfo/${route.query.ind}`).then((res) => {
    // console.log(res);
    //   图片
    if (res.data.data) {
      res.data.data.photoVo.carousel =
        res.data.data.photoVo.carousel.split(",");
      res.data.data.photoVo.detail = res.data.data.photoVo.detail.split(",");
      detilInfoImg.value = res.data.data.photoVo.carousel;
      detilImgList.value = res.data.data.photoVo.detail;
      detilInfo.value = res.data.data;
      setTimeout(()=>{
        fullscreenLoading.value=false
      },500)
    }
  });
};
getDetail();

watch(route, (n, o) => {
  getDetail();
  document.documentElement.scrollTop = 0;
});
</script>

<style scoped>
.back_color {
  background-color: #ffffff;
}
.detail-div {
  width: 1200px;
  height: auto;
  margin: 0 auto;
}
</style>