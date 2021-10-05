<script>
  // components
  import Input from '$components/Input.svelte';
  import Label from '$components/Label.svelte';

  // props
  export let label = 'Label';
  export let placeholder = '';
  export let state = 'default';
  export let type = '';
  export let value = '';
</script>

<div class="flex flex-col space-y-[.3rem]">
  <Label {label} />
  <Input bind:value bind:state {placeholder} {type} />
</div>
