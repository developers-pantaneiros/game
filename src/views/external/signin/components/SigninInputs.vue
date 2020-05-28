<template>
  <div>
    <signin-email-input v-model="value" />
    <signin-password-input v-model="value" />
  </div>
</template>

<script>
import SigninEmailInput from "./SigninEmailInput";
import SigninPasswordInput from "./SigninPasswordInput";

export default {
  name: "signin-inputs",
  components: {
    SigninEmailInput,
    SigninPasswordInput
  },
  props: {
    value: {
      type: Object,
      required: true,
      default: {}
    }
  }
};
</script>

<style lang="stylus">
  .form-input
    font-size 20px
</style>