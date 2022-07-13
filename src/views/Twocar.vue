<template>
  <div class="buy-body">
    <div class="page_box">
      <SearchTil></SearchTil>
      <SearchMenu></SearchMenu>
    </div>
  </div>
</template>

<script setup>
import SearchTil from "../components/main/twocar/searchTil.vue";
import SearchMenu from "../components/main/twocar/searchMenu.vue";
import axios from "axios";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const getList = () => {
  /**
   * displacementLt=1  排量
   *
   *
   *
   */
  // axios(`/api/tfcar/car/list?page=1&currentPrices=10&currentPrices=20`)
  let { id, xid, tid, dis, emi, mil, gea, dri, fue, sea, pic } = route.query;
  // &carBrand      品牌全部
  id = id ? (id == 0 ? "" : "&carBrand=" + id) : "";
  //carSeries=32570   品牌 具体
  xid = xid ? (xid == 0 ? "" : "&carSeries=" + xid) : "";
  //carModel=1        车型
  tid = tid ? (tid == 0 ? "" : "&carModel=" + tid) : "";
  //价格区间 currentPrices  currentPrices
  //  currentPrices 最低
  //  currentPriceGe最高
  if (typeof pic == "object") {
    pic = `&currentPrices=${pic[0]}&currentPrices=${pic[1]}`;
  } else {
    if (pic == 10) {
      // 价格最低
      pic = `&currentPrices=10`;
    } else {
      //
      pic = `&currentPriceGe=100`;
    }
  }
  // displacementLt 最低
  // displacements 区间
  // displacementGe=4 最高
  dis

  //   id=id?id==0?'':'&carBrand='+id:''
  //   id=id?id==0?'':'&carBrand='+id:''
  //   console.log(id);
  axios(`/api/tfcar/car/list?page=1${id}${xid}${tid}${pic}`).then((res) => {
    console.log(res);
  });
};
getList();
watch(route, () => {
  getList();
});
</script>

<style scoped>
.buy-body {
  width: 100%;
  height: auto;
  padding-top: 70px;
}
</style>