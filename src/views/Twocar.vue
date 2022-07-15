<template>
  <div class="buy-body">
    <div class="page_box">
      <SearchTil></SearchTil>
      <SearchMenu @pushSelList="pushSelList"></SearchMenu>
      <SearchMenuCon v-show="selList.length!=0" :selList='selList'></SearchMenuCon>
      <TwoTitle></TwoTitle>
      <Notfound v-if="contentList.length == 0"></Notfound>
      <div class="sift-car-body">
        <IndexTwoItem :contentList="contentList"></IndexTwoItem>
      </div>
      <div class="el_page">
        <el-pagination
          v-model:current-page="curPage"
          :page-size="20"
          background
          layout="prev, pager, next"
          :total="total"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchTil from "../components/main/twocar/searchTil.vue";
import SearchMenu from "../components/main/twocar/searchMenu.vue";
import SearchMenuCon from "../components/main/twocar/searchMenuCon.vue";
import TwoTitle from "../components/main/twocar/twoTitle.vue";
import IndexTwoItem from "../components/main/index/indexTwoItem.vue";
import Notfound from "../components/main/twocar/notfound.vue";
import axios from "axios";
import { ref, watch, provide } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

let contentList = ref([]);
// 总条数
let total = ref(0);
// 当前页
let curPage = ref(1);

watch(
  () => curPage.value,
  (v, o) => {
    getList();
  }
);

// 发送请求
const getList = () => {
  let {
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
    saleType,
    sort,
    carName,
  } = route.query;
  // &carBrand      品牌全部
  id = id ? (id == 0 ? "" : "&carBrand=" + id) : "";
  //carSeries=32570   品牌 具体
  xid = xid ? (xid == 0 ? "" : "&carSeries=" + xid) : "";
  //carModel=1        车型
  tid = tid ? (tid == 0 ? "" : "&carModel=" + tid) : "";
  // #region 价格区间 currentPrices  currentPrices currentPrices 最低  currentPriceGe最高
  if (!pic) {
    pic = "";
  } else {
    if (typeof pic == "object") {
      pic = `&currentPrices=${pic[0]}&currentPrices=${pic[1]}`;
    } else {
      if (pic == 10) {
        // 价格最低
        pic = `&currentPrices=10`;
      } else {
        //
        pic = `&currentPriceGe=100`;
      }
    }
  }
  // #endregion

  // #region  displacementLt 最低  displacements 区间  displacementGe=4 最高
  if (!dis) {
    dis = "";
  } else {
    if (typeof dis == "object") {
      dis = `&displacements=${dis[0]}&displacements=${dis[1] * 1}`;
    } else {
      if (dis == 1) {
        // 价格最低
        dis = `&displacementLt=1`;
      }
    }
  }
  // #endregion

  // emissionStandardType=3  排放
  emi = emi ? "&emissionStandardType=" + emi : "";

  // #region mileages 里程区间  mileageLt 最低里程  mileageGe 最高里程
  if (!mil) {
    mil = "";
  } else {
    if (typeof mil == "object") {
      mil = `&mileages=${mil[0]}&mileages=${mil[1] * 1}`;
    } else {
      if (mil == 1) {
        // 价格最低
        mil = `&mileageLt=1`;
      } else {
        mil = `mileageGe=8`;
      }
    }
  }
  // #endregion

  // gearboxType=0  变速箱
  gea = gea ? "&gearboxType=" + gea : "";

  // driveType=0  驱动类型
  dri = dri ? "&driveType=" + dri : "";

  // fuelType=1 燃油类型
  fue = fue ? "&fuelType=" + fue : "";

  // seat=4 座位数
  sea = sea ? (sea == 7 ? "&seatGe=" + sea : "&seat=" + sea) : "";

  // 类型
  saleType = saleType ? "&saleType=" + saleType : "";

  // 排序
  sort = sort ? "&sort=" + sort : "";
  // 搜索的车名称
  carName = carName ? "&carName=" + carName : "";

  axios(
    `/api/tfcar/car/list?page=${curPage.value}${carName}${sort}${id}${xid}${tid}${pic}${dis}${emi}${mil}${gea}${dri}${fue}${sea}${saleType}`
  ).then((res) => {
    // console.log(res);
    total.value = res.data.data.totalElements;
    contentList.value = res.data.data.content;
  });
};
getList();

const s = () => {
  console.log(1);
};





// 接收选择的参数
let selList = ref([]);
const pushSelList = () => {
  selList.value=[]
 
  for (let i = 0; i < sessionStorage.length; i++) {
    selList.value.push({
      key: sessionStorage.key(i),
      value: JSON.parse(sessionStorage.getItem(sessionStorage.key(i))) ,
    });
  }
  // console.log(selList.value);
};
pushSelList();

watch(route, () => {
  if(Object.keys(route.query).length==0){
    sessionStorage.clear()
  }
  getList();
  pushSelList();
  
});
provide("pushSelList", pushSelList);
</script>

<style scoped>
.buy-body {
  width: 100%;
  height: auto;
  padding-top: 70px;
}
.el_page {
  margin: 20px auto;
  display: flex;
  justify-content: center;
}
.sift-car-body {
  display: flex;
  flex-wrap: wrap;
  padding-top: 30px;
}
</style>