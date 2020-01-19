<template>
  <section class="nes-container with-title is-centered">
    <p class="title">Criar conta</p>
    <p>Para continuar, insira suas informações nos campos abaixo ou efetue autenticação na opção "Já tenho uma conta".</p>
    <form @submit.prevent="signup">
      <signup-inputs v-model="user" />
      <signup-actions />
    </form>
    <alert id="signup-alert" title="Erro" :message="error" confirmMessage="Confirmar" />
  </section>
</template>

<script>
import SignupInputs from "./components/SignupInputs";
import SignupActions from "./components/SignupActions";
import Alert from "@/commons/components/Alert";

import firebase from "firebase";
import mutationTypes from "@/commons/constants/mutation-types";
import getMessageError from "@/globals/utils/getMessageError.js";

export default {
  name: "signup",
  components: { SignupInputs, SignupActions, Alert },
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
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(user => {
          console.log("Usuário criado: ", user);
        })
        .catch(error => {
          this.showError(error);
        });
    },
    // findUser(uid) {
    //   firebase.firestore().collection('users').doc(uid).get().then(response => {
    //     this.$store.commit(mutationTypes.SET_USER, response.data());
    //     this.goToDashboardPage();
    //   })
    // },
    // goToDashboardPage() {
    //   this.$router.push({name: 'dashboard'});
    // },
    showError(error) {
      const errorMessage = getMessageError(error);
      this.error = errorMessage;
      document.getElementById("signup-alert").showModal();
    }
  }
};
</script>
