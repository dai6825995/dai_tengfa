<template>
  <component :is="header" />
  <router-view></router-view>
</template>

<script setup>
import header from "./components/header/header.vue";
import { ref, markRaw } from "vue";

const tab = ref(null);
changeTab('header');
function changeTab (newTab) {
  const lookup = {
    header,
    /* ...other component definitions */
  }
  tab.value = markRaw(lookup[newTab])
}
</script>

<style>
</style>