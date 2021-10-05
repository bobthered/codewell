<script>
  // components
  import { Check } from 'svelte-hero-icons';
  import Icon from 'svelte-hero-icons/Icon.svelte';

  // props
  export let checked = false;
  export let state = 'default';

  $: stateClasses =
    state === 'default'
      ? 'ring-gray-200 hover:ring-gray-300 peer-focus:ring-primary'
      : state === 'success'
      ? 'ring-success-500'
      : state === 'error'
      ? 'ring-error-500'
      : '';
</script>

<label class="relative cursor-pointer">
  <input
    type="checkbox"
    class="w-[0px] h-[0px] opacity-[0] absolute top-0 left-0 peer"
    bind:checked
  />
  <div
    class="rounded ring-2 ring w-[1rem] h-[1rem] text-white transition duration-200 outline-none {checked
      ? 'bg-primary ring-primary'
      : stateClasses}"
  >
    <Icon
      src={Check}
      class="pointer-events-none w-[1rem] h-[1rem] transition duration-200 {checked
        ? 'opacity-1'
        : 'opacity-0'}"
    />
  </div>
</label>
