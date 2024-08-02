<template>
  <div class="my-cont-menu">
    <button class="my-but2" @click="reset()">↻ Востановть все</button>
    <div class="my-them">
      <input type="radio" :value="false" v-model="picked" />
      <label for="Dark">Dark</label>
      <input type="radio" :value="true" v-model="picked" />
      <label for="light">light</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

let picked = ref(false);

function reset() {
  localStorage.removeItem("list");
  window.location.reload();
}

watch(picked, () => {
  if (picked.value) document.body.classList.add("light");
  else document.body.classList.remove("light");
});
</script>

<style lang="scss">
.light {
  --color-background: #fff !important;
  color: #222;
  --my-bg: #f5f5f4 !important ;
}
.my-but2 {
  width: 180px;
}
.my-them {
  display: flex;
  width: 200px;
  align-items: center;
  margin: 0 10px;
}
.my-cont-menu {
  display: flex;
  max-width: 1120px;
  align-self: flex-start;
  justify-content: space-between;
  border: 1px solid;
  border-radius: 16px;
  background-color: var(--my-bg);
  text-align: start;
  padding: 10px;
  margin: 10px;
}
</style>
