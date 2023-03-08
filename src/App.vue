<script lang="ts" setup>
// import HelloWorld from "./pages/helloword/HelloWorld.vue";
</script>

<template>
  <div>
    <a href="https://cn.vitejs.dev/" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://cn.vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <RouterLink class="card" to="/login">Login</RouterLink>
  <RouterLink class="card" to="/helloworld">HelloWorld</RouterLink>
  <RouterView></RouterView>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
