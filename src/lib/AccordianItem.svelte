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
    <span style="margin-right: 1em; vertical-align: middle; ">
      <svg viewBox="0 0 24 24" width="24" height="16" fill="orangered">
        <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
      </svg>
    </span>
  {:else}
    <span style="margin-right: 1em; vertical-align: middle; ">
      <svg viewBox="0 0 24 24" width="24" height="16" >
        <path
          d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"
        ></path>
      </svg>
    </span>
  {/if}

  <slot name="title" />
</button>

{#if $openItem === id}
  <section style="padding: 1em;" transition:slide>
    <slot />
  </section>
{/if}

<style>
  button {
    width: 100%;
    text-align: left;
    padding: 1em;
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