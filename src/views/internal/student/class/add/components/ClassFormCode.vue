<template>
  <div style="margin-top: 15px" class="nes-field">
    <label for="code_input">Código</label>
    <input v-model="value.code" type="text" id="code_input" class="nes-input" required />
  </div>
</template>

<script>
export default {
  name: "class-form-code",
  props: {
    value: {
      type: Object,
      required: true
    }
  }
};
</script>
