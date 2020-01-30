<template>
  <div class="nes-field">
    <label for="code_input">Código</label>
    <input v-model="value" type="text" id="code_input" class="nes-input" required />
  </div>
</template>

<script>
export default {
  name: "class-form-code",
  props: {
    value: {
      type: String,
      required: true,
      default: ""
    }
  }
};
</script>
