<template>
  <div class="nes-field">
    <label for="name_input">Nome</label>
    <input v-model="value.name" type="text" id="name_input" class="nes-input" required />
  </div>
</template>

<script>
export default {
  name: "class-form-name",
  props: {
    value: {
      type: Object,
      required: true,
      default: {}
    }
  }
};
</script>
