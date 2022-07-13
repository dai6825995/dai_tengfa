<template>
  <div class="tfcar-select">
    <span> {{ title || more[0].attrZh }} </span>
    <i></i>
    <div class="select-list">
      <a :class="{ 'sift-div-checked': title == '' }" @click="setTitle('')"
        >不限</a
      >
      <a
        :class="{ 'sift-div-checked': title == item.label }"
        v-for="item in more"
        :key="item.sortValue"
        @click="setTitle(item)"
        >{{ item.label }}</a
      >
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
defineProps(["more"]);
// #region 显示选择的条件
let title = ref("");
const setTitle = (item) => {
  let { id, xid, tid, pid, pic, dis, emi, mil, gea, dri, fue, sea } =
    route.query;
  if (!item) {
    title.value = item;
    router.push({
      path: "/twocar",
      query: {
        id,
        xid,
        tid,
        pid,
      },
    });
  } else {
    title.value = item.label;
    let key = Object.keys(item.queryRules)[0];
    switch (key) {
      case "displacements": //排量区间
        console.log("displacements");
        dis = item.queryRules[key];
        break;
      case "displacementLt": //排量最低
        console.log("displacements");
        dis = item.queryRules[key];
        break;
      case "displacementGe": //排量最大
        console.log("displacements");
        dis = item.queryRules[key];
        break;
      case "emissionStandardType": //排放
        console.log("emissionStandardType");
        emi = item.queryRules[key];
        break;
      case "mileages": //里程
        console.log("mileages");
        mil = item.queryRules[key];
        break;
      case "gearboxType": //变速箱
        console.log("gearboxType");
        gea = item.queryRules[key];
        break;
      case "driveType": //驱动类型
        console.log("driveType");
        dri = item.queryRules[key];
        break;
      case "fuelType": //燃油类型
        console.log("fuelType");
        fue = item.queryRules[key];
        break;
      case "seat": //座位数
        console.log("seat");
        sea = item.queryRules[key];
        break;
    }
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
      },
    });
    // console.log(item.queryRules[key]);
  }
};
// #endregion
</script>

<style>
</style>