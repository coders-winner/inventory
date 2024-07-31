<template>
  <div class="my-cont2">
    <div class="my-imgram">
      <div class="my-img"></div>
    </div>

    <div
      v-for="n in 7"
      class="my-skeleton"
      v-bind:style="`width: ${Math.ceil(Math.random() * (300 - 100) + 100)}px;`"
    ></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
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
.my-cont2 {
  max-width: 340px;
  align-self: flex-start;
  text-align: -webkit-center;
  border: 1px solid;
  border-radius: 16px;
  background-color: #222;
  justify-items: center;
  padding-bottom: 20px;
  margin: 20px;
}
</style>
