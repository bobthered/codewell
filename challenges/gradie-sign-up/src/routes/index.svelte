<script>
  // _lib
  import validate from '$lib/validate';

  // components
  import Button from '$components/Button.svelte';
  import Checkbox from '$components/Checkbox.svelte';
  import InputContainer from '$components/InputContainer.svelte';
  import Link from '$components/Link.svelte';

  // handlers
  const formIsValid = () => {
    let valid = true;

    // check if email is valid
    if (!validate.email(form.email.value)) {
      valid = false;
      form.email.state = 'error';
    } else {
      form.email.state = 'default';
    }

    // check if password is valid
    if (!validate.password(form.password.value)) {
      valid = false;
      form.password.state = 'error';
    } else {
      form.password.state = 'default';
    }

    // check if agreeToTermsAndConditions are checked
    if (form.agreeToTermsAndConditions.value !== true) {
      valid = false;
      form.agreeToTermsAndConditions.state = 'error';
    } else {
      form.agreeToTermsAndConditions.state = 'default';
    }

    return valid;
  };
  const submitHandler = () => {
    if (formIsValid()) {
    }
  };

  // props
  let form = {
    agreeToTermsAndConditions: {
      state: 'default',
      value: false
    },
    email: {
      state: 'default',
      value: ''
    },
    password: {
      state: 'default',
      value: ''
    }
  };
</script>

<svelte:head>
  <title>Gradie - Beautiful Gradients in Seconds</title>
</svelte:head>

<div
  class="min-w-screen min-h-screen relative opacity-[1] flex justify-center md:py-[8rem] lg:py-0 lg:items-center"
>
  <img src="./background.png" class="w-full h-full absolute top-0" alt="background" />
  <div class="flex flex-col relative md:w-[444px] lg:grid lg:grid-cols-2 lg:w-[860px] shadow-xl">
    <div class="bg-primary flex flex-col items-center text-white lg:rounded-l">
      <div class="font-bold text-[33px] pt-[33px] tracking-[-.025em] md:text-[35px] md:pt-[39px]">
        Gradie
      </div>
      <div class="opacity-[.5] md:text-[1.125rem]">Beautiful gradients in seconds.</div>
      <img class="mt-[-4.5rem] w-[375px] md:mt-[-2rem]" src="./iphone-mockup.png" alt="iphone" />
    </div>
    <form
      on:submit|preventDefault={submitHandler}
      class="flex flex-col px-[2.875rem] py-[33px] space-y-[1.25rem] bg-white md:px-[4rem] md:rounded-b lg:rounded-bl-none lg:rounded-r lg:py-[0] lg:justify-center lg:px-[4.25rem]"
    >
      <div class="font-bold text-[33px] tracking-[-.025em] md:text-[35px]">Login</div>
      <InputContainer
        label="Email"
        placeholder="john@example.com"
        type="email"
        bind:state={form.email.state}
        bind:value={form.email.value}
      />
      <InputContainer
        label="Password"
        placeholder="At least 8 characters"
        type="password"
        bind:state={form.password.state}
        bind:value={form.password.value}
      />
      <div class="flex space-x-[.875rem] items-start text-[1.1rem]">
        <Checkbox
          bind:checked={form.agreeToTermsAndConditions.value}
          bind:state={form.agreeToTermsAndConditions.state}
        />
        <div>
          By creating an account, you agree to the <Link href="./terms-and-conditions"
            >Terms & Conditions</Link
          >.
        </div>
      </div>
      <Button>Create an Account</Button>
    </form>
  </div>
</div>
