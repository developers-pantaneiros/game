<template>
  <section class="container">
    <div class="center-text">
      <h3 class="title">Criar nova conta</h3>
      <p class="subtitle">Para criar uma conta, insira suas informações nos campos abaixo e confirme. Caso deseje fazer autenticação, pressione a opção "Já tenho uma conta".</p>
    </div>
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
import actionTypes from "@/commons/constants/action-types";
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
    async signup() {
      try {
        const credentials = {email: this.user.email, password: this.user.password};
        const loggedUser = await this.$store.dispatch(actionTypes.SIGNUP, credentials);
        this.createUser(loggedUser.user);
      } catch (error) {
        this.showError(error); 
      }
    },
    async createUser(user) {
      try {
        const userToSave = this.buildUserToSave(user);
        await this.$store.dispatch(actionTypes.CREATE_USER, userToSave);
        this.goToClassPage(userToSave);
      } catch (error) {
        this.showError(error);
      }
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
    goToClassPage(user) {
      if (this.isUserATeacher(user.role)) {
        this.$router.push({name: "teacherClass"});
      } else {
        this.$router.push({name: "studentClass"})
      }
    },
    isUserATeacher(role) {
      return (role === "teacher");
    },
    showError(error) {
      const errorMessage = getMessageError(error);
      this.error = errorMessage;
      document.getElementById("signup-alert").showModal();
    }
  }
};
</script>
