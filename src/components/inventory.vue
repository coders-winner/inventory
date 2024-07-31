<template>
  <div class="my-cont">
    <!-- <div v-for="n in 30" class="my-box">
      <div class="my-item">
        <cargo />
      </div>
    </div> -->
    <draggable class="dragArea list-group w-full" :list="list">
      <div
        class="my-box list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
        v-for="(element, id) in list"
        :key="id"
      >
        <cargo />
        <!-- {{ element.name }} -->
      </div>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import cargo from "./cargo.vue";
import { ref } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
var draggable = VueDraggableNext;

let list = ref([
  { name: "0", id: 1 },
  { name: "Joao", id: 2 },
  { name: "Jean", id: 3 },
  { name: "Gerard", id: 4 },
  { name: "Gerard2", id: 5 },
  { name: "0", id: 6 },
  { name: "0", id: 7 },
]);
const dragging = false;
const enabled = true;
</script>

<style lang="scss">
.list-group {
  display: flex;

  flex-wrap: wrap;
}
.my-box {
  height: 140px;
  width: 140px;
  flex: 1 0 140px;
  border: 1px solid;
  // border-right: 1px solid;
  // border-bottom: 1px solid;
  text-align: center;
  text-align: -webkit-center;
  align-content: center;
}
.my-cont {
  min-width: 140px;
  overflow: auto;
  max-width: 740px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid;
  border-radius: 16px;
  background-color: #222;
  margin: 20px;
}
</style>
