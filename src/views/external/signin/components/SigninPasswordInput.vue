<template>
  <div class="nes-field">
    <label for="password_input">Senha</label>
    <input v-model="value.password" type="password" id="password_input" class="nes-input" required />
  </div>
</template>

<script>
export default {
  name: "signin-password-input",
  props: {
    value: {
      type: Object,
      required: true,
      default: {}
    }
  }
};
</script>
