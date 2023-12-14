<script>
  export let group;
  export let value;
</script>

<button class:selected={group === value} on:click={()=> group = value}>
  <slot />
</button>

<style>
  button {
    font-family: 'Montserrat', sans-serif;
    display: block;
    font-weight: semi-bold;
    font-size: 1rem;
    background-color: transparent;
    border: none;
    padding: 1em 32px;
    cursor: pointer;
    border-left: 2px solid #cccccc6e;
    letter-spacing: 0.2px;
    white-space: nowrap;
    width: 100%;
    text-align: left;
 
  }
  .selected {
    border-color: orangered;
    background-image: radial-gradient(circle, rgba(0, 0, 0, 0.02) 3px, transparent 1px);
    background-size: 10px 10px;
    color: orangered;
    font-size: 1.2rem;
    font-weight: 500;
  }
  button:hover{
   color: orangered;
   transition: 0.15s;
  }

  @media(min-width: 1600px){
    button{
      font-size: 18px;
    }
  }
  @media(max-width: 950px){
    button{
      font-size: 0.8rem;
    }
  }

</style>
