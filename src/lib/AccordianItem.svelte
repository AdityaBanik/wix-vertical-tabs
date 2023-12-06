<script>
  import { getContext } from "svelte";
  import { ACCORDION } from "./Accordian.svelte";
  import { slide } from "svelte/transition";

  const { registerItem, selectItem, openItem } = getContext(ACCORDION);

  // This component's unique id
  let id = Math.random();

  // Register this component with the parent
  registerItem(id);

  function toggle() {
    selectItem($openItem === id ? null : id);
  }
</script>

<button on:click={toggle} class:selected={$openItem === id}>
  {#if $openItem === id}
    <span style="margin-right: 1em;">➖</span>
  {:else}
    <span style="margin-right: 1em;">➕</span>
  {/if}

  <slot name="title" />
</button>

{#if $openItem === id}
  <section style="padding: 1em;"  transition:slide>
    <slot />
  </section>
{/if}

<style>
  button {
    width: 100%;
    text-align: left;
    padding:  1em;
    background: transparent;
    font-weight: semi-bold;
    border: 0;
    border-bottom: 2px solid #ddd;
    border-radius: 0;
    cursor: pointer;
    outline: 0;
  }

  .selected {
    border-color: orangered;
    background-image: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.071) 1px,
      transparent 1px
    );
    background-size: 10px 10px;
    color: orangered;
  }
</style>
