<template>
  <div>
    <router-link to="reset-password" class="forgot-password">Esqueceu sua senha?</router-link>
    <button type="submit" class="nes-btn is-success full-width margin-bottom-1">Entrar</button>
    <router-link to="signup" class="nes-btn is-primary full-width margin-bottom-1">Criar nova conta</router-link>
    <router-link to="/" class="nes-btn full-width">Voltar</router-link>
  </div>
</template>

<script>
export default {
  name: "signin-actions"
};
</script>

<style lang="scss" scoped>
  .forgot-password {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    float: right;
  }
</style>
