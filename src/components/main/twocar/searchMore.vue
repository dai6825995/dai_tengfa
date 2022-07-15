<template>
  <div class="tfcar-select">
    <span> {{ title || more[0].attrZh }} </span>
    <i></i>
    <div class="select-list">
      <a
        :class="{ 'sift-div-checked': title == '' }"
        @click="setTitle(more[0].attrZh)"
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
import { ref, defineProps, inject } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
defineProps(["more"]);
const pushSelList = inject("pushSelList");
// #region 显示选择的条件
let title = ref("");
const setTitle = (item) => {
  let { id, xid, tid, pid, pic, dis, emi, mil, gea, dri, fue, sea, carName } =
    route.query;
  if (typeof item == "string") {
    console.log(item);
    switch (item) {
      case "排量": //排量区间
        console.log("displacements");
        dis = null;
        sessionStorage.removeItem("dis");
        break;
      case "排放": //排放
        console.log("emissionStandardType");
        emi = null;
        sessionStorage.removeItem("emi");
        break;
      case "里程": //里程
        console.log("mileages");
        mil = null;
        sessionStorage.removeItem("mil");
        break;
      case "变速箱": //变速箱
        console.log("gearboxType");
        gea = null;
        sessionStorage.removeItem("gea");
        break;
      case "驱动类型": //驱动类型
        console.log("driveType");
        dri = null;
        sessionStorage.removeItem("dri");
        break;
      case "燃油类型": //燃油类型
        console.log("fuelType");
        fue = null;
        sessionStorage.removeItem("fue");
        break;
      case "座位数": //座位数
        console.log("seat");
        sea = null;
        sessionStorage.removeItem("sea");
        break;
    }
    title.value = "";
  } else {
    title.value = item.label;
    let key = Object.keys(item.queryRules)[0];
    switch (key) {
      case "displacements": //排量区间
        console.log("displacements");
        dis = item.queryRules[key];
        sessionStorage.setItem("dis", JSON.stringify(["排量", item.label]));
        break;
      case "displacementLt": //排量最低
        console.log("displacements");
        dis = item.queryRules[key];
        sessionStorage.setItem("dis", JSON.stringify(["排量", item.label]));
        break;
      case "displacementGe": //排量最大
        console.log("displacements");
        dis = item.queryRules[key];
        sessionStorage.setItem("dis", JSON.stringify(["排量", item.label]));
        break;
      case "emissionStandardType": //排放
        console.log("emissionStandardType");
        emi = item.queryRules[key];
        sessionStorage.setItem("emi", JSON.stringify(["排放", item.label]));
        break;
      case "mileages": //里程
        console.log("mileages");
        mil = item.queryRules[key];
        sessionStorage.setItem("mil", JSON.stringify(["里程", item.label]));
        break;
      case "mileageLt": //里程
        console.log("mileageLt");
        mil = item.queryRules[key];
        sessionStorage.setItem("mil", JSON.stringify(["里程", item.label]));
        break;
      case "mileageGe": //里程
        console.log("mileageGe");
        mil = item.queryRules[key];
        sessionStorage.setItem("mil", JSON.stringify(["里程", item.label]));
        break;
      case "gearboxType": //变速箱
        console.log("gearboxType");
        gea = item.queryRules[key];
        sessionStorage.setItem("gea", JSON.stringify(["变速箱", item.label]));
        break;
      case "driveType": //驱动类型
        console.log("driveType");
        dri = item.queryRules[key];
        sessionStorage.setItem("dri", JSON.stringify(["驱动类型", item.label]));
        break;
      case "fuelType": //燃油类型
        console.log("fuelType");
        fue = item.queryRules[key];
        sessionStorage.setItem("fue", JSON.stringify(["燃油类型", item.label]));
        break;
      case "seat": //座位数
        console.log("seat");
        sea = item.queryRules[key];
        sessionStorage.setItem("sea", JSON.stringify(["座位数", item.label]));
        break;
      case "seatGe": //座位数
        console.log("seat");
        sea = item.queryRules[key];
        sessionStorage.setItem("sea", JSON.stringify(["座位数", item.label]));
        break;
    }
    // console.log(item.queryRules[key]);
  }
  // pushSelList()
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
};
// #endregion
</script>

<style>
</style>