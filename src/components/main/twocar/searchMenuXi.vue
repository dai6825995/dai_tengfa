<template>
  <div class="buy-sift-div">
    <div class="sift-series-list buy-sift-div-mt">
      <div style="">车系：</div>
      <div class="series-list-div">
        <a @click="setCarxi(0)" :class="{ 'sift-div-checked': carXisel == 0 }"
          >不限</a
        >
        <a v-if="carXiList.length == 0">宝马X4 M</a>
        <a
          @click="setCarxi(xi)"
          v-for="xi in carXiList"
          :key="xi.id"
          :class="{ 'sift-div-checked': carXisel == xi.id }"
          >{{ xi.abbreviation }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, watch, inject } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

let carXiList = ref([]);
//#region
let getCarXiList = () => {
  axios(`/api/tfcar/car/series300?brandId=${route.query.id}`).then((res) => {
    carXiList.value = res.data.data ? res.data.data.content : [];
  });
};
getCarXiList();
//#endregion
const pushSelList = inject("pushSelList");
// #region 根据路由导航高亮 车品牌
let carXisel = ref(0);
carXisel.value = route.query.xid ? route.query.xid : 0;
const setCarxi = (xi) => {
  let xid;
  if (!xi) {
    carXisel.value = xi;
    xid = 0;
    pushSelList(1, "");
  } else {
    pushSelList(1, xi.abbreviation);
    xid = xi.id;
  }
  let { id } = route.query;

  router.push({
    path: "/twocar",
    query: {
      id,
      xid,
    },
  });
};

watch(route, (newval, oldval) => {
  getCarXiList();
  carXisel.value = route.query.xid ? route.query.xid : 0;
});
// #endregion
</script>

<style>
</style>