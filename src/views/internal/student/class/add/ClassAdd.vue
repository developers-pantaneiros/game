<template>
  <section class="container">
    <div class="center-text">
      <h3 class="title">Ingressas em uma nova classe</h3>
      <p class="subtitle">Para ingressar uma nova classe, leia o código QR Code ou digite o código manualmente  no campo abaixo.</p>
    </div>
    <form @submit.prevent="add">
      <class-form-inputs v-model="classContent" />
      <class-form-actions />
    </form>
    <alert id="class-add" title="Erro" :message="error" confirmMessage="Confirmar" />
  </section>
</template>

<script>
import ClassFormActions from "./components/ClassFormActions";
import ClassFormInputs from "./components/ClassFormInputs";
import Alert from "@/commons/components/Alert";

import firebase from "firebase";
import actionTypes from "@/commons/constants/action-types";
import getMessageError from "@/globals/utils/getMessageError.js";

export default {
  name: "signup",
  components: { ClassFormActions, ClassFormInputs, ClassFormActions, Alert },
  data() {
    return {
      classContent: {
        code: ""
      },
      user: "",
      error: ""
    };
  },
  created() {
    this.getCurrentUserUid();
  },
  methods: {
    async add() {
      try {
        const userReference = firebase.firestore().collection("users").doc(this.user.uid);
        const classJoined = await this.$store.dispatch(actionTypes.JOIN_CLASS, {code: this.classContent.code, user: userReference});
        this.goToClassRoom(classJoined);
      } catch (error) {
        this.showError(error);
        console.log(error)
      }
    },
    getCurrentUserUid() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.user = user;
        } else {
          this.goToSigninPage();
        }
      });
    },
    goToSigninPage() {
      this.$router.push({ name: "signin" });
    },
    goToClassRoom(classJoined) {
      this.$router.push({ name: "studentClassRoom",  params: {uid: classJoined.uid} })
    },
    showError(error) {
      const errorMessage = getMessageError(error);
      this.error = errorMessage;
      document.getElementById("class-add").showModal();
    },
    setCode(code) {
      this.code = code
    }
  }
};
</script>
