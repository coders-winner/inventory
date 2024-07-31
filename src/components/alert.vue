<template>
  <div class="my-alert">
    <div class="my-clos">✕</div>
    <div class="my-imgram">
      <div class="my-img"></div>
    </div>

    <div
      v-for="n in 7"
      class="my-skeleton"
      v-bind:style="`width: ${Math.ceil(Math.random() * (300 - 100) + 100)}px;`"
    ></div>
    <input id="number" type="number" value="42" />
    <div>
      <button class="my-but">Отмена</button>
      <button>Подтвердить</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
.my-imgram {
  margin: 20px;
  height: 400px;
  width: 300px;
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
  padding-bottom: 20px;
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
