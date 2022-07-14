<template>
  <div class="sift-car-top">
    <div class="car-top-left">
      <a @click="setSale(5)" :class="{ 'top-left-checked': saleTypeSel == 5 }"
        >全部</a
      >
      <a @click="setSale(0)" :class="{ 'top-left-checked': saleTypeSel == 0 }"
        >腾发自营</a
      >
      <a @click="setSale(1)" :class="{ 'top-left-checked': saleTypeSel == 1 }"
        >车主直售</a
      >
      <a @click="setSale(2)" :class="{ 'top-left-checked': saleTypeSel == 2 }"
        >限时秒杀</a
      >
      <a @click="setSale(3)" :class="{ 'top-left-checked': saleTypeSel == 3 }"
        >严选车源</a
      >
    </div>
    <div class="car-top-right">
      <a @click="setSort('')" :class="{ 'top-right-checked': sortSel == '' }"
        >默认排序</a
      >
      <span></span>
      <a
        @click="setSort('uTime%2Cdesc')"
        :class="{ 'top-right-checked': sortSel == 'uTime%2Cdesc' }"
        sort="uTime%2Cdesc"
        >最新发布</a
      >
      <span></span>
      <a
        @click="setSort('currentPrice%2Cdesc')"
        :class="{ 'top-right-checked': sortSel == 'currentPrice%2Cdesc' }"
        >价格最高</a
      >
      <span></span>
      <a
        @click="setSort('currentPrice%2Casc')"
        :class="{ 'top-right-checked': sortSel == 'currentPrice%2Casc' }"
        >价格最低</a
      >
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
// #region 控制分类高亮 以及跳转页面
let saleTypeSel = ref(5);
saleTypeSel.value = route.query.saleType
  ? route.query.saleType == ""
    ? 5
    : route.query.saleType
  : 5;
const setSale = (sid) => {
  let saleType;
  if (sid == 5) {
    saleTypeSel.value = 5;
    saleType = "";
  } else {
    saleType = sid;
    saleTypeSel.value = sid;
  }
  let { id, xid, tid, dis, emi, mil, gea, dri, fue, sea, pic, sort } =
    route.query;
  router.push({
    path: "/twocar",
    query: {
      id,
      xid,
      tid,
      dis,
      emi,
      mil,
      gea,
      dri,
      fue,
      sea,
      pic,
      sort,
      saleType,
    },
  });
};
// #endregion

// #region
let sortSel = ref("");
sortSel.value = route.query.sort ? route.query.sort : "";
const setSort = (sel) => {
  sortSel.value = sel;
  let sort = sel;
  let { id, xid, tid, dis, emi, mil, gea, dri, fue, sea, pic, saleType } =
    route.query;
  router.push({
    path: "/twocar",
    query: {
      id,
      xid,
      tid,
      dis,
      emi,
      mil,
      gea,
      dri,
      fue,
      sea,
      pic,
      sort,
      saleType,
    },
  });
};
// #endregion

watch(route, (n, o) => {
  saleTypeSel.value = route.query.saleType
    ? route.query.saleType == ""
      ? 5
      : route.query.saleType
    : 5;
  sortSel.value = route.query.sort ? route.query.sort : "";
});
</script>

<style scoped>
.sift-car-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
}
.car-top-left {
  margin-top: 11px;
}
.car-top-left a {
  font-size: 18px;
  line-height: 32px;
  font-weight: 600;
  padding-bottom: 6px;
  margin-right: 30px;
  display: inline-block;
}
.top-left-checked {
  color: #5685fe;
  border-bottom: 4px solid #5685fe;
  border-radius: 2px;
}
.car-top-right {
  width: 307px;
  height: 40px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
  margin-bottom: 13px;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.car-top-right a {
  display: block;
  width: 76px;
  height: 40px;
  box-sizing: border-box;
  text-align: center;
  padding: 10px 0;
}
.top-right-checked {
  color: #5685fe;
}
.car-top-right span {
  display: inline-block;
  width: 1px;
  height: 20px;
  background: #f0f0f0;
}
</style>