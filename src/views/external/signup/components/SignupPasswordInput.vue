<template>
  <div class="nes-field password">
    <label for="password_input">Senha</label>
    <input v-model="value.password" type="password" id="password_input" class="nes-input form-input" required />
    <span class="password__span">O comprimento mínimo é de 6 caracteres</span>
  </div>
</template>

<script>
export default {
  name: "signup-password-input",
  props: {
    value: {
      type: Object,
      required: true,
      default: {}
    }
  }
};
</script>

<style lang="scss" scoped>
  .password {
    &__span {
      font-size: 1.0rem;
      color: #707070;
    }
  }
</style>
