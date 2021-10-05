<script>
  // props
  let forProp = '';
  export let label = '';
  export { forProp as for };
</script>

<label class="font-bold text-[1.1rem]" for={forProp}>{label}</label>
