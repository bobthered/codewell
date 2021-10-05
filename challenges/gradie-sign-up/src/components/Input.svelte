<script>
  // props
  export let classes =
    'w-full ring ring-2 rounded px-[1rem] py-[.8rem] text-[1.05rem] outline-none transition duration-200';
  export let placeholder = '';
  export let state = 'default';
  export let type = 'text';
  export let value = '';

  $: stateClasses =
    state === 'default'
      ? 'ring-gray-200 hover:ring-gray-300 focus:ring-primary'
      : state === 'success'
      ? 'ring-success-500'
      : state === 'error'
      ? 'ring-error-500'
      : '';
</script>

<div class="relative">
  {#if type === 'email'}
    <input type="email" bind:value {placeholder} class="{classes} {stateClasses}" />
  {:else if type === 'password'}
    <input type="password" bind:value {placeholder} class="{classes} {stateClasses}" />
  {/if}
</div>
