<template>
  <div class="buy-sift">
    <div class="buy-sift-div">
      <div class="sift-div-list">
        <div>品牌：</div>
        <a @click="getCarXi(0)" :class="{ 'sift-div-checked': brandSel == 0 }"
          >不限</a
        >
        <a
          v-for="(brand, index) in convenient.convenientBrands"
          @click="getCarXi(brand)"
          :key="index"
          :class="{ 'sift-div-checked': brandSel == brand.queryRules.carBrand }"
        >
          {{ brand.label }}
        </a>
      </div>
      <div
        id="all-btn-xia"
        @click="showAllbrand()"
        class="sift-all-btn btn-xia"
      >
        <span>{{ controlBrand }}</span>
        <i ref="shangxia"></i>
      </div>
    </div>
    <div
      class="sift-all-brand"
      :style="{ display: isshowAllBrand ? 'flex' : 'none' }"
    >
      <div
        class="all-brand-flex"
        v-for="(one, index) in brand300List"
        :key="index"
      >
        <div
          class="brand-flex-code"
          v-for="(two, ind) in one.onelist"
          :key="ind"
        >
          <div class="brand-flex-title">{{ two.label }}</div>
          <div class="brand-flex-item">
            <a
              v-for="brand in two.list"
              @click="getCarXi(brand)"
              :key="brand.id"
              :class="{ 'sift-div-checked': brandSel == brand.id }"
              >{{ brand.label }}</a
            >
          </div>
        </div>
      </div>
    </div>
    <SearchMenuType style="margin-top: 30px;"></SearchMenuType>
    <SearchMenuPrice></SearchMenuPrice>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import SearchMenuType from "../twocar/searchMenuType.vue";
import SearchMenuPrice from "../twocar/searchMenuPrice.vue";
// 推荐品牌
let convenient = ref([]);
axios("/api/tfcar/car/convenient").then((res) => {
  convenient.value = res.data.data;
  convenient.value.convenientBrands.forEach((item) => {
    item.queryRules = JSON.parse(item.queryRules);
  });
  //   console.log(convenient.value);
});

//#region 全部车品牌的数据处理以及分割
let brand300List = ref([
  {
    onelist: [],
  },
]);
let brand300 = [
  {
    label: "A",
    list: [],
  },
];
let count = 0;
axios("/api/tfcar/car/brand300").then((res) => {
  //   console.log(res.data.data.content);
  //   处理数据
  res.data.data.content.forEach((brand) => {
    let bn = brand.brand.split(" - ");
    if (bn[0] == brand300[count].label) {
      brand300[count].list.push({
        label: bn[1],
        id: brand.id,
        imageUrl: brand.imageUrl,
      });
    } else {
      brand300.push({
        label: bn[0],
        list: [
          {
            label: bn[1],
            id: brand.id,
            imageUrl: brand.imageUrl,
          },
        ],
      });
      count++;
    }
  });
  //   console.log(brand300);
  //切割三份
  let num = 0;
  for (let i = 0; i < brand300.length; i++) {
    if ((i != 0 && i == 5) || i == 12) {
      brand300List.value.push({
        onelist: [],
      });
      num++;
    } else {
      brand300List.value[num].onelist.push(brand300[i]);
    }
  }
});
//#endregion

//#region  控制所有车品牌的展示隐藏
let controlBrand = ref("全部");
let shangxia = ref(null);
let isshowAllBrand = ref(false);
const showAllbrand = () => {
  isshowAllBrand.value = !isshowAllBrand.value;
  controlBrand.value = isshowAllBrand.value ? "收起" : "全部";
  shangxia.value.style.transform = isshowAllBrand.value
    ? "rotate(180deg)"
    : "rotate(0)";
};
//#endregion

//#region 点击路由跳转

const router = useRouter();
const getCarXi = (item) => {
  isshowAllBrand.value = false;
  controlBrand.value = "全部";
  shangxia.value.style.transform = "rotate(0)";
  console.log(item);
  let id;
  if (!item) {
    id = item;
  } else if (item.queryRules) {
    id = item.queryRules.carBrand;
  } else {
    id = item.id;
  }
//   router.push({
//     path: "/twocar",
//     query: {
//       id,
//     },
//   });
};
//#endregion

// #region 根据路由导航高亮 车品牌
let brandSel = ref(0);
const route = useRoute();
brandSel.value = route.query.id ? route.query.id : 0;
watch(route, (newval, oldval) => {
  brandSel.value = newval.query.id ? newval.query.id : 0;
});
// #endregion
</script>

<style src='@\assets\css\searchMenu.css'>
</style>