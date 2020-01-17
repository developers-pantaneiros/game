<template>
  <section class="nes-container  with-title is-centered">
    <p class="title">Autenticar-se</p>
    <p>Para continuar, efetue autenticação ou crie uma nova conta na opção "Criar nova conta".</p>
    <form @submit.prevent="signin">
      <signin-inputs v-model="user" />
      <signin-actions />
    </form>
  </section>
</template>

<script>
import SigninInputs from "./components/SigninInputs";
import SigninActions from "./components/SigninActions";

export default {
  name: "signin",
  components: { SigninInputs, SigninActions },
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    signin() {
      this.$router.push({name: 'game'})
    }
  }
};
</script>
