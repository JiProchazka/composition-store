<template>
  <ul>
    <li v-for="a in arr" :key="a">{{ a }}</li>
  </ul>
</template>
<script>
import { useStore } from "../plugins/store";
import { watch, toRefs } from "@vue/composition-api";
export default {
  name: "test",
  setup() {
    const store = useStore();

    const { arr, value } = toRefs(store);

    watch(value, (value, prevValue) => {
      console.log(`${prevValue} -> ${value}`);
    });

    return { arr };
  }
};
</script>
