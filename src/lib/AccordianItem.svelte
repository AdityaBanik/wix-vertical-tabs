<script>
  import { getContext, onMount } from "svelte";
  import { ACCORDION } from "./Accordian.svelte";
  import { fade, fly, slide } from "svelte/transition";

  const { registerItem, selectItem, openItem, items } = getContext(ACCORDION);
  export let alignRight = false;
  // This component's unique id
  let id = Math.random();

  // Register this component with the parent
  registerItem(id);

  function toggle() {
    selectItem(id);
  }

  if (items.length === 1) {
    selectItem(id);
  }
</script>

<button
  on:click={toggle}
  class:selected={$openItem === id}
  class:align-right={alignRight}
>
  {#if $openItem === id}
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#4ea8de">
      <path
        d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"
      ></path>
    </svg>
  {:else}
    <svg viewBox="0 0 24 24" width="24" height="24">
      <path
        d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"
      ></path>
    </svg>
  {/if}

  <slot name="title" />
</button>

{#if $openItem === id}
  <section in:slide={{ duration: 200 }} out:slide={{ duration: 200 }}>
    <slot />
  </section>
{/if}

<style>
  button {
    width: 100%;

    font-size: 18px;
    padding: 1em;
    background: transparent;
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    border-radius: 0;
    cursor: pointer;
    outline: 0;
    color: #023047da;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    transition: background-color 200ms ease-in-out;
    display: flex;

    gap: 10px;
    letter-spacing: 0.8px;
    border: 0;
  }

  .align-right {
    justify-content: flex-end;
  }

  .selected {
    border-color: transparent;
    background-color: rgba(220, 220, 220, 0.175);
    color: #008afc;
    font-weight: 600;
  }

  .align-right.selected {
    color: #8d7ad3;
  }

  @media screen and (max-width: 1100px) {
    .align-right {
      justify-content: flex-start;
    }

    button{
      font-size: 14px;
    }
  }
</style>
