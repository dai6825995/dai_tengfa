<template>
  <div class="buy-body">
    <div class="page_box">
      <SearchTil></SearchTil>
      <NewMenu></NewMenu>
      <Notfound></Notfound>
    </div>
  </div>
</template>

<script setup>
import SearchTil from "../components/main/twocar/searchTil.vue";
import NewMenu from "../components/main/newcar/newMenu.vue";
import Notfound from "../components/main/twocar/notfound.vue";
</script>

<style scoped>
.buy-body {
  width: 100%;
  height: auto;
  padding-top: 70px;
}
</style>