<template>
  <section class="nes-container">
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
