<template>
  <div class="hello">
    Value: {{ store.value }}<br />
    <button @click="addToArr">Add to Array</button>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { useStore } from "../plugins/store";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  setup() {
    const store = useStore();

    function addToArr() {
      store.arr.push(new Date().toISOString());
    }

    function increment() {
      store.value++;
    }

    return { store, addToArr, increment };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
