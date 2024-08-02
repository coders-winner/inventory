<template>
  <div class="my-alert">
    <div @click="close()" class="my-clos">✕</div>
    <div class="my-cartimg">
      <cargo :list="props.modalData" />
    </div>
    <div v-once>
      <div
        v-for="n in 7"
        class="my-skeleton"
        v-bind:style="`width: ${Math.ceil(
          Math.random() * (300 - 100) + 100
        )}px;`"
      ></div>
    </div>

    <button v-if="!dell" @click="dell = true" style="width: 84%">
      Удалить предмет
    </button>
    <div v-else>
      <input
        placeholder="Введите количество"
        min="0"
        :max="editItem.col"
        type="number"
        v-model="delcol"
      />
      <div style="color: #fa7272">{{ info }}</div>
      <button @click="cancel()" class="my-but">Отмена</button>
      <button @click="update(delcol)">Подтвердить</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import cargo from "./cargo.vue";
import { useStore } from "@/stores";

const store = useStore();
let dell: any = ref(false);
let delcol: any = ref();
let info: any = ref();

const props = defineProps({
  modalData: { type: Object, required: true, default: null },
  modal: { type: Boolean, required: true, default: null },
  save: { type: Function },
});
const emit = defineEmits(["update:modalData", "update:modal", "change:save"]);
let editItem: any = ref();

editItem = { ...props.modalData };

function update(value: any) {
  if (value <= editItem.col && value > 0) {
    editItem.col = editItem.col - value;
    store.aSave(editItem);
    emit("update:modalData", { ...editItem });
    if (editItem.col <= 0) close();

    delcol.value = undefined;
    info.value = `Вы удалили ${value} шт.`;
  } else info.value = "Вы ввели недопустимое значение количества";
}

function close() {
  editItem.value = undefined;
  info.value = undefined;
  emit("update:modal", false);
}
function cancel() {
  dell.value = false;
  delcol.value = undefined;
  info.value = undefined;
}
</script>

<style lang="scss">
.my-but {
  background-color: white !important;
  border: 2px solid #fa7272;
  color: black;
  transition-duration: 0.3s;
  &:hover {
    background-color: #ffecec !important;
  }
}
.my-cartimg {
  margin: 20px;
  height: 160px;
  width: 160px;
  padding-top: 88px;
  border: 1px solid;
  border-radius: 16px;
  overflow: auto;
}
.my-img {
  height: 400px;
  width: 300px;
  border-radius: 16px;
  background: linear-gradient(to top, black, cyan);
  filter: blur(4px);
  background-image: url("https://cdn.ananasposter.ru/image/cache/catalog/poster/film/760-1000x830.jpg");
  background-size: cover;
  background-position: center;
}
.my-alert {
  max-width: 340px;
  align-self: flex-start;
  text-align: -webkit-center;
  border: 1px solid;
  border-radius: 16px;
  background-color: #222222f0;
  justify-items: center;
  padding: 10px 10px 20px 10px;
  margin: 20px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 99;
}
.my-clos {
  position: absolute;
  right: 0;
  z-index: 99;
  font-size: x-large;
  margin: 8px 14px;
  transition-duration: 0.3s;
  &:hover {
    color: #fa7272;
    cursor: pointer;
    transform: scale(110%);
  }
}
</style>
