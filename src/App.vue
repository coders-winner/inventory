<template>
  <div id="app">
    <menus />
    <div class="my-app">
      <Panel />
      <div class="my-pos">
        <inventory />
      </div>
    </div>
    <snackbar />
  </div>
</template>

<script setup lang="ts">
import menus from "./components/menu.vue";
import inventory from "./components/inventory.vue";
import Panel from "./components/panel.vue";
import snackbar from "./components/snackbar.vue";
</script>

<style scoped lang="scss">
.my-app {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}
.my-pos {
  position: relative;
}
</style>
