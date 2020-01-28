<template>
  <div>
    <button type="submit" class="nes-btn is-success full-width margin-bottom-1">Criar classe</button>
    <button @click="goToTeacherClass" class="nes-btn full-width">Cancelar</button>
  </div>
</template>

<script>
export default {
  name: "class-form-actions",
  methods: {
    goToTeacherClass() {
      this.$router.push({name: "teacherClass"})
    }
  }
};
</script>
