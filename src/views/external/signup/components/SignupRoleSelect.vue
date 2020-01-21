<template>
  <div class="select">
    <label class="select__label" for="role_select">Tipo de usuário</label>
    <div class="nes-select">
      <select v-model="value.role" id="role_select" required>
        <option value disabled selected hidden>Selecione</option>
        <option value="student">Estudante</option>
        <option value="teacher">Professor(a)</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "signup-role-select",
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
  .select {
    margin-bottom: 2rem;
    &__label {
      width: 100%;
      text-align: initial;
    }
  }
</style>
