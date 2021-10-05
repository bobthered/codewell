<script>
  // props
  export let classes =
    'font-bold text-primary underline outline-none transition duration-200 hover:no-underline focus:bg-primary focus:text-white';
  export let href = '#';
</script>

<a {href} class={classes} on:click|preventDefault><slot /></a>
