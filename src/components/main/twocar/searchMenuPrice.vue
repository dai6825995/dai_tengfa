<template>
  <div class="buy-sift-div">
    <div class="sift-div-list" style="margin: 18px 0 8px 0">
      <div>价格：</div>
      <a @click="setPri(0)" :class="{ 'sift-div-checked': prisel == 0 }"
        >不限</a
      >
      <a
        v-for="p in priceList"
        :key="p.sortValue"
        @click="setPri(p)"
        :class="{ 'sift-div-checked': prisel == p.sortValue }"
        >{{ p.label }}</a
      >
      <div class="sift-price-div">
        <div class="sift-price-in">
          <input
            type="text"
            id="min-price"
            maxlength="3"
            placeholder="输入金额"
            v-model="mixPric"
          />
          <span>—</span>
          <input
            type="text"
            id="max-price"
            maxlength="3"
            placeholder="输入金额"
            v-model="maxPric"
          />
          <span style="margin-left: 10px">万</span>
        </div>
        <button type="button" class="price-in-btn" @click="confirm">
          确定
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

// #region 输入的价格区间
let pic = null;
let pid = 0;

let mixPric = ref("");
let maxPric = ref("");
if (route.query.pid == 100) {
  // console.log(route.query.pic);
  if (typeof route.query.pic == "string") {
    if (route.query.pic == 20) {
      mixPric.value = 0;
      maxPric.value = 20;
    } else {
      mixPric.value = 50;
      maxPric.value = 999;
    }
  } else {
    mixPric.value = route.query.pic[0];
    maxPric.value = route.query.pic[1];
  }
}
const confirm = () => {
  prisel.value = 100;
  pid = prisel.value;
  let obj = {
    a: [mixPric.value, maxPric.value],
  };
  pic = obj.a;
  let { id, xid, tid, dis, emi, mil, gea, dri, fue, sea } = route.query;
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
      pid,
    },
  });
};
// #endregion

// #region 获取价格分类
let priceList = ref([]);
axios(`/api/tfcar/car/price`).then((res) => {
  priceList.value = res.data.data;
  priceList.value.forEach((item) => {
    item.queryRules = JSON.parse(item.queryRules);
  });
  // console.log(priceList.value);
});
// #endregion

// #region 导航高亮
let prisel = ref(0);
prisel.value = route.query.pid ? route.query.pid : 0;
const setPri = (p) => {
  mixPric.value = "";
  maxPric.value = "";
  if (p) {
    prisel.value = p.sortValue;
    pid = p.sortValue;
    pic =
      p.queryRules.currentPriceLt ||
      p.queryRules.currentPrices ||
      p.queryRules.currentPriceGe;
    let { id, xid, tid, dis, emi, mil, gea, dri, fue, sea, carName } =
      route.query;
    router.push({
      path: "/twocar",
      query: {
        id,
        xid,
        tid,
        pid,
        dis,
        emi,
        mil,
        gea,
        dri,
        fue,
        sea,
        pic,
        carName,
      },
    });
  } else {
    prisel.value = 0;
    let { id, xid, tid, dis, emi, mil, gea, dri, fue, sea, carName } =
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
        carName,
      },
    });
  }
};
// #endregion

watch(route, (newval, oldval) => {
  prisel.value = route.query.pid ? route.query.pid : 0;
});
</script>

<style>
</style>