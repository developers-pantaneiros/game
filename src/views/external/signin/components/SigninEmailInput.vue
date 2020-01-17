<template>
  <div class="nes-field">
    <label for="email_input">E-mail</label>
    <input v-model="value.email" type="email" id="email_input" class="nes-input" required />
  </div>
</template>

<script>
export default {
  name: "signin-email-input",
  props: {
    value: {
      type: Object,
      required: true,
      default: {}
    }
  }
};
</script>
