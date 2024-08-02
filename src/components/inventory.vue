<template>
  <div class="my-cont">
    <draggable class="dragArea list-group w-full" v-model="list">
      <div
        class="my-box list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
        v-for="(element, id) in list"
        :key="id"
      >
        <cargo :list="element" @click="upModal(element)" />
      </div>
    </draggable>
    <cart v-model:modalData="modalData" v-model:modal="modal" v-if="modal" />
  </div>
</template>

<script setup lang="ts">
import cart from "./cart.vue";
import cargo from "./cargo.vue";
import { ref, computed } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
var draggable = VueDraggableNext;

import { useStore } from "@/stores";

const store = useStore();
store.aLocalS();

const list: any = computed({
  get() {
    return store.getlist;
  },
  set(value) {
    store.alist(value);
  },
});
let modal = ref(false);
let modalData = ref();

function upModal(value: object) {
  modal.value = !modal.value;
  modalData.value = value;
}
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
