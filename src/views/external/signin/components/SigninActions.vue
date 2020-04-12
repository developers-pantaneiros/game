<template>
  <div>
    <router-link to="reset-password" class="forgot-password">Esqueceu sua senha?</router-link>
    <button type="submit" class="nes-btn is-success full-width-button margin-bottom-1">Entrar</button>
    <router-link to="signup" class="nes-btn is-primary full-width-button margin-bottom-1">Criar conta</router-link>
    <router-link to="/" class="nes-btn button-with-icon full-width-button">
      <font-awesome-icon size="lg" :icon="icons.faAngleLeft"/>
      Voltar
    </router-link>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default {
  name: "signin-actions",
  components: { FontAwesomeIcon },
  data() {
    return {
      icons: {
        faAngleLeft
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .forgot-password {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    float: right;
  }
</style>
