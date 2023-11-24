<script context="module">
  export const ACCORDION = {};
</script>

<script>
  import { setContext, onDestroy } from "svelte";
  import { writable } from "svelte/store";

  const items = [];
  const openItem = writable(null);

  setContext(ACCORDION, {
    registerItem: (item) => {
      items.push(item);
      onDestroy(() => {
        const i = items.indexOf(item);
        items.splice(i, 1);
        openItem.update((current) =>
          current === item ? items[i] || items[items.length - 1] : current
        );
      });
    },
    selectItem: (item) => {
      openItem.set(item);
    },
    openItem,
  });
</script>

<slot />
