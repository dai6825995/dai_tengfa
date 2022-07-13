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
        <button type="button" class="price-in-btn">确定</button>
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

// #region
let mixPric=ref(null)
let maxPric=ref(null)
// #endregion

// #region 获取价格分类
let priceList = ref([]);
axios(`/api/tfcar/car/price`).then((res) => {
  console.log(res.data.data);
  priceList.value = res.data.data;
  priceList.value.forEach((item) => {
    item.queryRules = JSON.parse(item.queryRules);
  });
});
// #endregion

// #region 导航高亮
let prisel = ref(0);
prisel.value = route.query.pid ? route.query.pid : 0;
const setPri = (p) => {
  let pid = 0;
  if (p) {
    prisel.value = p.sortValue;
    pid = p.sortValue;
  } else {
    prisel.value = 0;
  }
  let { id, tid, xid } = route.query;
  router.push({
    path: "/twocar",
    query: {
      id,
      xid,
      tid,
      pid,
    },
  });
};
// #endregion

watch(route, (newval, oldval) => {
  prisel.value = route.query.pid ? route.query.pid : 0;
});
</script>

<style>
</style>