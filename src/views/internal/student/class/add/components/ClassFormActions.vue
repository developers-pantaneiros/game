<template>
  <div>
    <button type="submit" class="nes-btn is-success full-width margin-bottom-1">Ingressar na classe</button>
    <button @click="goToAddClassCodeReader" type="button" class="nes-btn full-width is-primary margin-bottom-1">Ler QR Code</button>
    <button @click="goToStudentClass" type="button" class="nes-btn full-width is-error">Cancelar</button>
  </div>
</template>

<script>
export default {
  name: "class-form-actions",
  methods: {
    goToStudentClass() {
      this.$router.push({name: "studentClass"})
    },
    goToAddClassCodeReader() {
      this.$router.push({name: "studentClassAddCodeReader"})
    }
  }
};
</script>
