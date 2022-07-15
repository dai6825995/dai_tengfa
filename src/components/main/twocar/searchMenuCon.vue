<template>
  <div class="sift-num">
    <div class="sift-now-div">
      <span>当前筛选：</span>
      <div class="sift-now" v-for="(sel, index) in selList" :key="index">
        <span>{{ sel.value[0] }}：</span>
        <span class="sift-now-text">{{ sel.value[1] }}</span>
        <!-- <a @click="delquery(sel.key)" class="sift-now-del"></a> -->
      </div>
      <a @click="reset" class="sift-reset">
        <i></i>
        <span>重置条件</span>
      </a>
    </div>
    <!--            <span class="sift-num-text">您找到 2 辆好车</span>-->
  </div>
</template>

<script setup>
import { defineProps, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
defineProps(["selList"]);

const reset = () => {
  sessionStorage.clear();
  router.push({
    path: "/twocar",
  });
};
// const delquery = (key) => {
//   console.log(key);
//   // sessionStorage.removeItem(key);
//   delete route.query[key];
//   console.log(route.query);
//   let {
//     id,
//     xid,
//     tid,
//     dis,
//     emi,
//     mil,
//     gea,
//     dri,
//     fue,
//     sea,
//     pic,
//     saleType,
//     sort,
//     carName,
//   } = route.query;
//   router.push({
//     path: "/twocar",
//     query: {
//       id,
//       xid,
//       tid,
//       dis,
//       emi,
//       mil,
//       gea,
//       dri,
//       fue,
//       sea,
//       pic,
//       saleType,
//       sort,
//       carName,
//     },
//   });
// };
// watch(route,(n,o)=>{
//   console.log(1);
// })
</script>

<style scoped>
.sift-num {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  font-size: 14px;
}
.sift-now-div {
  display: flex;
  align-items: center;
}
.sift-now {
  width: auto;
  padding: 0 10px;
  background-color: #ffffff;
  height: 34px;
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.sift-now-text {
  color: #5685fe;
  margin-right: 10px;
}
.sift-now a {
  width: 14px;
  height: 14px;
  background-image: url("../../../assets/img/guanbi.png");
  background-size: 14px 14px;
}
.sift-reset {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #666666;
  margin-left: 20px;
  margin-right: 30px;
}
.sift-reset i {
  width: 14px;
  height: 14px;
  background-image: url("../../../assets/img/shanchu.png");
  background-size: 14px 14px;
  display: inline-block;
  margin-right: 6px;
}
</style>