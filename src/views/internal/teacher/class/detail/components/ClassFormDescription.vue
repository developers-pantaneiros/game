<template>
  <div class="nes-field">
    <label for="description_input">Descrição</label>
    <input v-model="value.description" type="text" id="description_input" class="nes-input" required />
  </div>
</template>

<script>
export default {
  name: "class-form-description",
  props: {
    value: {
      type: Object,
      required: true,
      default: {}
    }
  }
};
</script>
