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
  
  let { id, xid, tid, pid, pic, dis, emi, mil, gea, dri, fue, sea,carName } =
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
        sessionStorage.setItem('dis',item.label)
        break;
      case "displacementLt": //排量最低
        console.log("displacements");
        dis = item.queryRules[key];
        sessionStorage.setItem('dis',item.label)
        break;
      case "displacementGe": //排量最大
        console.log("displacements");
        dis = item.queryRules[key];
        sessionStorage.setItem('dis',item.label)
        break;
      case "emissionStandardType": //排放
        console.log("emissionStandardType");
        emi = item.queryRules[key];
        sessionStorage.setItem('emi',item.label)
        break;
      case "mileages": //里程
        console.log("mileages");
        mil = item.queryRules[key];
        sessionStorage.setItem('mil',item.label)
        break;
      case "mileageLt": //里程
        console.log("mileageLt");
        mil = item.queryRules[key];
        sessionStorage.setItem('mil',item.label)
        break;
      case "mileageGe": //里程
        console.log("mileageGe");
        mil = item.queryRules[key];
        sessionStorage.setItem('mil',item.label)
        break;
      case "gearboxType": //变速箱
        console.log("gearboxType");
        gea = item.queryRules[key];
        sessionStorage.setItem('gea',item.label)
        break;
      case "driveType": //驱动类型
        console.log("driveType");
        dri = item.queryRules[key];
        sessionStorage.setItem('dri',item.label)
        break;
      case "fuelType": //燃油类型
        console.log("fuelType");
        fue = item.queryRules[key];
        sessionStorage.setItem('fue',item.label)
        break;
      case "seat": //座位数
        console.log("seat");
        sea = item.queryRules[key];
        sessionStorage.setItem('sea',item.label)
        break;
      case "seatGe": //座位数
        console.log("seat");
        sea = item.queryRules[key];
        sessionStorage.setItem('sea',item.label)
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
        carName
      },
    });
    // console.log(item.queryRules[key]);
  }
};
// #endregion
</script>

<style>
</style>