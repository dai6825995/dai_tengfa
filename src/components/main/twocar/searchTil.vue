<template>
  <div class="buy-search">
    <input type="text" @keyup.enter="goSearch" id="buy-search-input" v-model="search" placeholder="搜索品牌、车型" />
    <button @click="goSearch" type="button" id="buy-search-btn">搜索</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
let router=useRouter()
let search=ref('')
const goSearch=()=>{
  router.push({
    path:'/twocar',
    query:{
      carName:search.value
    }
  })
}

</script>

<style scoped>
.buy-search {
    width: 880px;
    height: 40px;
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #F0F0F0;
    box-sizing: border-box;
    margin: 38px 0 20px 0;
    padding-left: 20px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
}
#buy-search-input {
    height: 100%;
    width: 750px;
    line-height: 20px;
}
input {
    border: none;
    outline: none;
    -webkit-user-select: text !important;
}
#buy-search-btn {
    width: 96px;
    height: 40px;
    background: #5685FE;
    box-sizing: border-box;
    border-radius: 0px 8px 8px 0px;
    border: 1px solid #F0F0F0;
    color: #FFFFFF;
}
</style>