<template>
  <div id="city">
    <div class="city-top">
      <div></div>
      <div>选择城市</div>
      <div id="cancel-city" @click="close">
        <img src="@/assets/img/Shape.png" />
      </div>
    </div>
    <div class="city-body">
      <div id="city-code">
        <div class="codes">
          <div
            @click="setzimu('#')"
            :class="{ 'codes-div': true, active: selzimu == '#' }"
            data-codes="#0"
          >
            #
          </div>
          <div
            v-for="(key, index) in cityList"
            :key="index"
            :class="{ 'codes-div': true, active: selzimu == index }"
            :data-codes="index"
            @click="setzimu(index)"
          >
            {{ index }}
          </div>
        </div>
      </div>
      <div class="city-list" id="city-list">
        <div :ref="cityRef" id="#" class="city-list-item">
          <div class="city-item-title">#</div>
          <div class="city-item-list">
            <div>
              <span
                @click="setCity({ cityId: 0, name: '全部' })"
                :class="{ active: selCity == '0' }"
                city-code="0"
                >全国</span
              >
            </div>
          </div>
        </div>
        <template v-for="(key, val) in cityList" :key="val">
          <div :ref="cityRef" :id="val" class="city-list-item">
            <div class="city-item-title">{{ val }}</div>
            <div class="city-item-list">
              <div v-for="city in key" :key="city.cityId">
                <span
                  @click="setCity(city)"
                  :class="{ active: selCity == city.cityId }"
                  :city-code="city.cityId"
                >
                  {{ city.name }}
                </span>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="city-bottom">
      <button id="city-confirm" @click="confirm">确定</button>
      <button id="city-cancel" @click="close">取消</button>
    </div>
  </div>
</template>

<script setup>
// 引入地区json文件
import { ref, defineEmits } from "vue";
import city from "@/assets/json/city.json";
let cityList = ref(city);
// 父传子
const emit = defineEmits(["setiShow", "setCityName"]);
// console.log(cityList.value);
// 关闭弹窗
function close() {
  emit("setiShow");
}

// 获取DOM
let cityRefList = [];
let cityRef = (el) => {
  cityRefList.push(el);
};
// 字母
let selzimu = ref("#");
function setzimu(index) {
  selzimu.value = index;
  // 跳到对应的视图
  for (let i = 0; i < cityRefList.length; i++) {
    if (cityRefList[i].id == index) {
      cityRefList[i].scrollIntoView();
    }
  }
}
// 城市.
let selCity = ref("0");
// 城市名字
let selCityName = "全国";
function setCity(city) {
  selCity.value = city.cityId;
  selCityName = city.name;
}

// 确认按钮
const confirm = () => {
  emit("setiShow");
  emit("setCityName", selCityName);
};
</script>

<style scoped>
#city {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 100;
  width: 900px;
  height: 674px;
  background: #ffffff;
}
.city-top {
  width: 100%;
  height: 74px;
  box-sizing: border-box;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  line-height: 20px;
  color: #333333;
}
.city-top img {
  cursor: pointer;
}
.city-body {
  width: 100%;
  height: 524px;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
}
#city-code {
  width: 38px;
  height: 524px;
  position: absolute;
  top: 74px;
  left: 0;
  z-index: 1;
  border-right: 1px solid rgba(159, 167, 199, 0.3);
}
.codes {
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  line-height: 20px;
  padding-top: 30px;
  font-size: 12px;
  color: #333333;
  cursor: pointer;
}
.city-list {
  padding-left: 39px;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
}
.city-item-title {
  padding-left: 20px;
  width: 861px;
  height: 24px;
  box-sizing: border-box;
  background: #eff2f9;
  opacity: 0.5;
}
.city-item-list {
  padding: 14px 0 20px 0;
  width: 861px;
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.city-item-list div {
  width: 205px;
}
.city-item-list div span {
  display: inline-block;
  padding: 7px 20px;
  cursor: pointer;
  font-size: 14px;
}
.city-bottom {
  width: 900px;
  height: 76px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px -2px 6px 0px rgb(0 18 103 / 7%);
  border: 1px solid #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
}
#city-confirm {
  width: 72px;
  height: 40px;
  background: #5685fe;
  border-radius: 4px;
  color: #ffffff;
  border: none;
  margin-right: 20px;
  cursor: pointer;
}
#city-cancel {
  width: 72px;
  height: 40px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  color: #666666;
  cursor: pointer;
}
.active {
  color: rgb(86, 133, 254);
}
.city-list .active {
  color: rgb(86, 133, 254);
  background: rgb(245, 247, 254);
}
</style>