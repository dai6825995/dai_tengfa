<template>
  <div class="buy-body">
    <div class="page_box">
        <SearchTil></SearchTil>
        <SearchMenu></SearchMenu>
    </div>
  </div>
</template>

<script setup>
import SearchTil from '../components/main/twocar/searchTil.vue'
import SearchMenu from '../components/main/twocar/searchMenu.vue'
</script>

<style scoped>
.buy-body {
    width: 100%;
    height: auto;
    padding-top: 70px;
}
</style>