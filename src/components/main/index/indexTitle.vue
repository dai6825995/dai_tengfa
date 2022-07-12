<template>
  <div class="list-title">
    <div class="list-left">
      <div class="search-line"></div>
      <div class="title-text">
        <slot></slot>
      </div>
    </div>
    <a class="list-left" href="/c0/ershouche">
      <span>查看更多</span>
      <img src="@/assets/img/icon_更多.png" />
    </a>
  </div>
</template>

<script setup>
</script>

<style scoped>
.list-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.list-left {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #666666;
}
.search-line {
    width: 10px;
    height: 30px;
    background: #5685FE;
}
.title-text {
    line-height: 32px;
    font-weight: 600;
    font-size: 24px;
    margin-left: 20px;
}
</style>