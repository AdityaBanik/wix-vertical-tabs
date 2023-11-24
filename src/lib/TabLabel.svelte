<script>
  export let group;
  export let value;
</script>

<button class:selected={group === value} on:click={()=> group = value}>
  <slot />
</button>

<style>
  button {
    font-weight: semi-bold;
    font-size: 1rem;
    background-color: transparent;
    border: none;
    padding: 1em 2em;
    cursor: pointer;
    border-left: 2px solid #ccc;
    letter-spacing: 0.2px;
    white-space: nowrap;
    
  }
  .selected {
    border-color: orangered;
    background-image: radial-gradient(circle, rgba(0, 0, 0, 0.145) 1px, transparent 1px);
    background-size: 10px 10px;
    color: orangered;
  }

</style>
