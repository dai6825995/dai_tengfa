<template>
  <div class="buy-sift-div">
    <div class="sift-div-list">
      <div>车型：</div>
      <a @click="setTypeId(0)" :class="{ 'sift-div-checked': typesel == 0 }"
        >不限</a
      >
      <a
        @click="setTypeId(m.id)"
        v-for="m in modelList"
        :key="m.id"
        :class="{ 'sift-div-checked': typesel == m.id }"
        >{{ m.model }}</a
      >
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

// #region 获取全部车型
let modelList = ref([]);
axios("/api/tfcar/car/model").then((res) => {
  //   console.log(res.data.data.content);
  modelList.value = res.data.data.content;
});
// #endregion

// #region 点击车型高亮
let typesel = ref(0);
typesel.value = route.query.tid ? route.query.tid : 0;
const setTypeId = (tid) => {
  typesel.value = tid;
  let { id, xid, pid, pic, dis, emi, mil, gea, dri, fue, sea } = route.query;

  //   console.log(obj);
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
      pic,
      gea,
      dri,
      fue,
      sea,
    },
  });
};
watch(route, (newval, oldval) => {
  typesel.value = route.query.tid ? route.query.tid : 0;
});
//#endregion
</script>

<style>
</style>