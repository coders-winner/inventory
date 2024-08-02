<template>
  <div v-if="list.col > 0" class="my-cont4">
    <div>
      <div
        class="my-item"
        v-bind:style="`background-color: ${list.color}`"
      ></div>
      <div
        class="my-item2"
        v-bind:style="`background-color: ${list.color}`"
      ></div>
      <div class="my-item-col">{{ list.col }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  list: {
    type: Object,
    required: true,
  },
});
</script>

<style setup lang="scss">
.my-item {
  position: absolute;
  left: 30px;
  top: -40px;
  width: 80px;
  height: 80px;
  background-color: #93bb77;
}
.my-item2 {
  filter: blur(2px) saturate(50%) contrast(70%) brightness(120%);
  opacity: 0.9;
  z-index: 1;
  width: 80px;
  height: 80px;
  background-color: rgb(173 211 146 / 94%);
  position: absolute;
  top: -54px;
  left: 46px;
}
.my-item-col {
  position: absolute;
  bottom: -70px;
  right: 0px;
  border-top: 1px solid;
  border-left: 1px double;
  border-top-left-radius: 10px;
  height: 30px;
  width: 30px;
}
.my-cont4 {
  position: relative;
  cursor: pointer;
}
</style>
