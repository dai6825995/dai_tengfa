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
          @click="getCarXi(brand.queryRules.carBrand)"
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
              @click="getCarXi(brand.id)"
              :key="brand.id"
              :class="{ 'sift-div-checked': brandSel == brand.id }"
              >{{ brand.label }}</a
            >
          </div>
        </div>
      </div>
    </div>
    <SearchMenuXi></SearchMenuXi>
    <SearchMenuType></SearchMenuType>
    <SearchMenuPrice></SearchMenuPrice>
    <div class="buy-sift-div">
      <div class="sift-div-list">
        <div>更多：</div>
        <div class="tfcar-select">
          <span> 燃油类型 </span>
          <i></i>
          <div class="select-list">
            <a class="sift-div-checked">不限</a>
            <a href="/c0/ershouche/default/e20">汽油</a>
            <a href="/c0/ershouche/default/e21">柴油</a>
            <a href="/c0/ershouche/default/e22">纯电</a>
            <a href="/c0/ershouche/default/e23">油电混合</a>
          </div>
        </div>
        <div class="tfcar-select">
          <span> 驱动类型 </span>
          <i></i>
          <div class="select-list">
            <a class="sift-div-checked">不限</a>
            <a href="/c0/ershouche/default/f24">前驱</a>
            <a href="/c0/ershouche/default/f25">后驱</a>
            <a href="/c0/ershouche/default/f26">四驱</a>
          </div>
        </div>
        <div class="tfcar-select">
          <span> 座位数 </span>
          <i></i>
          <div class="select-list">
            <a class="sift-div-checked">不限</a>
            <a href="/c0/ershouche/default/g27">2座</a>
            <a href="/c0/ershouche/default/g28">4座</a>
            <a href="/c0/ershouche/default/g29">5座</a>
            <a href="/c0/ershouche/default/g30">6座</a>
            <a href="/c0/ershouche/default/g31">7座及以上</a>
          </div>
        </div>
        <div class="tfcar-select">
          <span> 排量 </span>
          <i></i>
          <div class="select-list">
            <a class="sift-div-checked">不限</a>
            <a href="/c0/ershouche/default/h32">1.0L以下</a>
            <a href="/c0/ershouche/default/h33">1.0-1.6L</a>
            <a href="/c0/ershouche/default/h34">1.6-2.0L</a>
            <a href="/c0/ershouche/default/h35">2.0-3.0L</a>
            <a href="/c0/ershouche/default/h36">3.0-4.0L</a>
            <a href="/c0/ershouche/default/h37">4.0L以上</a>
          </div>
        </div>
        <div class="tfcar-select">
          <span> 变速箱 </span>
          <i></i>
          <div class="select-list">
            <a class="sift-div-checked">不限</a>
            <a href="/c0/ershouche/default/i38">手动</a>
            <a href="/c0/ershouche/default/i39">自动</a>
            <a href="/c0/ershouche/default/i40">手自一体</a>
          </div>
        </div>

        <div class="tfcar-select">
          <span> 里程 </span>
          <i></i>
          <div class="select-list">
            <a class="sift-div-checked">不限</a>
            <a href="/c0/ershouche/default/j41">1万公里以内</a>
            <a href="/c0/ershouche/default/j42">1-3万公里</a>
            <a href="/c0/ershouche/default/j43">3-5万公里</a>
            <a href="/c0/ershouche/default/j44">5-8万公里</a>
            <a href="/c0/ershouche/default/j45">8万公里以上</a>
          </div>
        </div>

        <div class="tfcar-select">
          <span> 排放 </span>
          <i></i>
          <div class="select-list">
            <a class="sift-div-checked">不限</a>
            <a href="/c0/ershouche/default/k46">国三</a>
            <a href="/c0/ershouche/default/k47">国四</a>
            <a href="/c0/ershouche/default/k48">国五</a>
            <a href="/c0/ershouche/default/k49">国六</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import SearchMenuXi from "./searchMenuXi.vue";
import SearchMenuType from "./searchMenuType.vue";
import SearchMenuPrice from "./searchMenuPrice.vue";
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

const getCarXi = (id) => {
  isshowAllBrand.value = false;
  controlBrand.value = "全部";
  shangxia.value.style.transform="rotate(0)"
  router.push({
    path: "/twocar",
    query: {
      id,
    },
  });
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

<style>
.buy-sift {
  width: 1200px;
  min-height: 290px;
  box-sizing: border-box;
  padding: 30px 20px 30px 20px;
  background: #ffffff;
  margin-bottom: 20px;
  font-size: 14px;
}
.buy-sift-div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sift-div-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: #333333;
}
.sift-div-list > a {
  margin-left: 20px;
  padding: 0 10px;
  line-height: 20px;
  height: 20px;
  cursor: pointer;
}
.sift-div-checked {
  color: #ffffff;
  background-color: #5685fe;
  /* border-radius: 4px; */
}
.sift-div-list > a:nth-child(3) {
  margin-left: 10px;
}
.sift-all-btn {
  color: #5685fe;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-right: 16px;
}
.sift-all-btn span {
  margin-right: 7px;
}
.btn-xia i {
  width: 12px;
  height: 7px;
  display: inline-block;
  background-image: url("../../../assets/img/xia.png");
  background-repeat: no-repeat;
  background-position: 50%;
}
.sift-all-brand {
  padding: 30px 0 30px 62px;
  border-bottom: 1px solid #f0f0f0;
}
.all-brand-flex {
  width: 365px;
}
.brand-flex-code {
  display: flex;
}
.brand-flex-title {
  color: #5685fe;
  margin-right: 10px;
  line-height: 20px;
}
.brand-flex-item {
  display: flex;
  flex-wrap: wrap;
}
.brand-flex-item > a {
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
}
.sift-series-list {
  display: flex;
}
.buy-sift-div-mt {
  margin-top: 30px;
}

.series-list-div {
  display: flex;
  flex-wrap: wrap;
  width: 1030px;
}
.series-list-div > a {
  margin-left: 20px;
  margin-bottom: 30px;
  padding: 0 10px;
  line-height: 20px;
  height: 20px;
}

.series-list-div > a:nth-child(2) {
  margin-left: 10px;
}
.sift-price-div {
  width: 322px;
  height: 44px;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2px;
  font-size: 14px;
}
.sift-price-in {
  display: flex;
  align-items: center;
}
.sift-price-in input {
  width: 90px;
  height: 40px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  padding-left: 14px;
  outline: none;
}
.sift-price-in span {
  margin: 0 6px;
}
.price-in-btn {
  width: 68px;
  height: 40px;
  background: #f5f7fe;
  border-radius: 4px;
}
button {
  cursor: pointer;
  border: none;
}
.sift-div-list .tfcar-select {
  margin-left: 20px;
}
.tfcar-select {
  width: 116px;
  height: 40px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  padding: 0 13px;
  position: relative;
  font-size: 14px;
  cursor: pointer;
}
.tfcar-select span {
  line-height: 40px;
}
.tfcar-select i {
  float: right;
  width: 14px;
  height: 7px;
  display: block;
  margin-top: 17px;
}
.select-list {
  display: none;
  position: absolute;
  top: 39px;
  left: -1px;
  z-index: 1;
  min-width: 116px;
  max-height: 218px;
  overflow-y: auto;
  box-sizing: border-box;
  background-color: #ffffff;
}
.select-list > a {
  width: 100%;
  height: 34px;
  padding-left: 14px;
  line-height: 34px;
  display: inline-block;
  /* margin: 6px 0; */
  box-sizing: border-box;
}
.series-list-div > a:nth-child(2) {
  margin-left: 10px;
}
.series-list-div > a {
  margin-left: 20px;
  margin-bottom: 30px;
  padding: 0 10px;
  line-height: 20px;
  height: 20px;
}
.sift-price-div:hover {
  box-shadow: 0px 2px 20px 0px rgb(170 170 216 / 40%);
}
.sift-price-div:hover .price-in-btn {
  background-color: #5685fe;
  color: #ffffff;
}
</style>