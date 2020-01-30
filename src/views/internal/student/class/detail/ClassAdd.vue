<template>
  <section class="nes-container with-title is-centered">
    <p class="title">Ingressas em uma nova classe</p>
    <p>Para ingressar uma nova classe, leia o código QR Code ou digite o código manualmente  no campo abaixo.</p>
    <form @submit.prevent="add">
      <class-form-inputs v-model="code" />
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
      code: "",
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
        // TODO: ingressar na turma
        this.goToClassView();
      } catch (error) {
        this.showError(error);
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
    goToClassView(createdClass) {
      this.$router.push({ name: "studentClassView",  params: {uid: createdClass.uid} })
    },
    showError(error) {
      const errorMessage = getMessageError(error);
      this.error = errorMessage;
      document.getElementById("class-add").showModal();
    }
  }
};
</script>

<style lang="scss" scoped>
.qrcode-stream__camera,
.qrcode-stream__pause-frame {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    background-size: cover;
    max-width: inherit !important;
    max-height: inherit !important;
}
.qrcode-stream__inner-wrapper {
    position: inherit !important;
    max-width: inherit !important;
    max-height: inherit !important;
    z-index: inherit !important;
}
</style>
