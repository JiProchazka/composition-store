import { provide, inject } from "@vue/composition-api";

const StoreSymbol = Symbol();

export function provideStore(store) {
  provide(StoreSymbol, store);
}

export function useStore() {
  const store = inject(StoreSymbol);
  if (!store) {
    throw new Error("No store provided! Register store in App.vue");
  }
  return store;
}
