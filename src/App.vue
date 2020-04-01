<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Array />
  </div>
</template>

<script>
import { reactive } from "@vue/composition-api";
import { provideStore } from "./plugins/store";
import { store } from "./store";
import HelloWorld from "./components/HelloWorld.vue";
import Array from "./components/Array";

export default {
  name: "App",
  components: {
    HelloWorld,
    Array
  },
  setup() {
    provideStore(reactive(store));

    return {};
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
