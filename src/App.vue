<template>
  <div id="app">
    <div class="my-app">
      <Panel />
      <div class="my-pos">
        <inventory />
        <!-- <alert /> -->
      </div>
    </div>
    <snackbar />
  </div>
</template>

<!-- <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="125"
        height="125"
      />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header> -->

<!-- <RouterView /> -->

<script setup lang="ts">
import inventory from "./components/inventory.vue";
import Panel from "./components/panel.vue";
import snackbar from "./components/snackbar.vue";
import alert from "./components/alert.vue";
</script>

<style scoped lang="scss">
.my-app {
  // display: grid;
  // grid-template-columns: repeat(1, 1fr 4fr);
  display: flex;
  flex-wrap: wrap;

  // grid-auto-flow: column;
  justify-content: center;
  width: 100%;
}
.my-pos {
  position: relative;
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
