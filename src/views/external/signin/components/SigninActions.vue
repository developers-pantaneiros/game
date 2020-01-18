<template>
  <div>
    <router-link to="forgot-password" class="forgot-password">Esqueceu sua senha?</router-link>
    <button type="submit" class="nes-btn is-success full-width margin-bottom-1">Autenticar-se</button>
    <router-link to="signup" class="nes-btn is-primary full-width">Criar nova conta</router-link>
  </div>
</template>

<script>
export default {
  name: "signin-actions"
};
</script>

<style lang="scss" scoped>
  .forgot-password {
    margin-bottom: 2rem;
    float: right;
  }
</style>
