<template>
  <div class="my-cont4">
    <div class="my-item"></div>
    <div class="my-item2"></div>
    <div class="my-item-col">1</div>
  </div>
</template>

<script setup lang="ts"></script>

<style setup lang="scss">
.my-item {
  position: absolute;
  left: 30px;
  top: -40px;
  width: 80px;
  height: 80px;
  background-color: #93bb77;
  // box-shadow: -50px 50px 0px rgba(60, 154, 143, 1);
}
.my-item2 {
  filter: blur(1px);
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
}
</style>
