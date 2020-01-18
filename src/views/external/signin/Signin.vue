<template>
  <section class="nes-container with-title is-centered">
    <p class="title">Autenticar-se</p>
    <p>Para continuar, efetue autenticação ou crie uma nova conta na opção "Criar nova conta".</p>
    <form @submit.prevent="signin">
      <signin-inputs v-model="user" />
      <signin-actions />
    </form>
    <alert id="signin-alert" title="Erro" :message="error" confirmMessage="Confirmar" />
  </section>
</template>

<script>
import SigninInputs from "./components/SigninInputs";
import SigninActions from "./components/SigninActions";
import Alert from "@/commons/components/Alert";

import firebase from "firebase";
import mutationTypes from "@/commons/constants/mutation-types";
import getMessageError from "@/globals/utils/getMessageError.js";

export default {
  name: "signin",
  components: { SigninInputs, SigninActions, Alert },
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      error: ""
    };
  },
  methods: {
    signin() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(user => {
          console.log("Usuário autenticado: ", user.user.uid);
          this.findUser(user.user.uid);
        })
        .catch(error => {
          this.showError(error);
        });
    },
    findUser(uid) {
      firebase.firestore().collection('users').doc(uid).get().then(response => {
        this.$store.commit(mutationTypes.SET_USER, response.data());
        this.goToDashboardPage();
      })
    },
    goToDashboardPage() {
      this.$router.push({name: 'dashboard'});
    },
    showError(error) {
      const errorMessage = getMessageError(error);
      this.error = errorMessage;
      document.getElementById("signin-alert").showModal();
    }
  }
};
</script>
