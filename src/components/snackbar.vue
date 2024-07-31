<template>
  <div class="my-cont3">
    <div
      class="my-skeleton"
      v-bind:style="`width: ${Math.ceil(Math.random() * (900 - 300) + 300)}px;`"
    ></div>
    <div class="my-close">✕</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.my-close {
  margin: 8px 14px;
  transition-duration: 0.3s;
  &:hover {
    color: #fa7272;
    cursor: pointer;
    transform: scale(110%);
  }
}
.my-cont3 {
  display: flex;
  max-width: 1120px;
  align-self: flex-start;
  justify-content: space-between;
  border: 1px solid;
  border-radius: 16px;
  background-color: #222;
  text-align: start;

  margin: 20px;
}
</style>
