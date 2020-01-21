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
        name: "",
        email: "",
        password: "",
        role: ""
      },
      error: ""
    };
  },
  methods: {
    signup() {
      firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(user => {
          this.createUser(user.user);
        })
        .catch(error => {
          this.showError(error);
        });
    },
    createUser(user) {
      const userToSave = this.buildUserToSave(user);
      firebase.firestore().collection('users').doc(userToSave.uid).set(userToSave)
        .then(() => {
          this.$store.commit(mutationTypes.SET_USER, userToSave);
          this.goToDashboardPage();
        })
        .catch(error => {
          this.showError(error);
        });
    },
    buildUserToSave(user) {
      const userToSave = {
        uid: user.uid,
        name: this.user.name,
        email: this.user.email,
        role: this.user.role,
        access: true,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      return userToSave;
    },
    goToDashboardPage() {
      this.$router.push({name: 'dashboard'});
    },
    showError(error) {
      const errorMessage = getMessageError(error);
      this.error = errorMessage;
      document.getElementById("signup-alert").showModal();
    }
  }
};
</script>
