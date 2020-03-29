<template>
  <section class="container">
    <div class="center-text">
      <h3 class="title">Ingressar em uma nova classe</h3>
      <p id="enter-class" class="subtitle">
        Para ingressar uma nova classe, leia o código QR Code ou digite o código manualmente no campo abaixo.
      </p>
      <audio-button style="margin-bottom: 15px" :tagId="'enter-class'" />
    </div>
    <form @submit.prevent="add">
      <class-form-inputs v-model="classContent" />
      <class-form-actions />
    </form>
    <alert id="class-add" title="Erro" :message="error" confirmMessage="Confirmar" />
  </section>
</template>

<script>
import AbstractClassAddVue from "./AbstractClassAdd.vue";
import ClassFormActions from "./components/ClassFormActions";
import ClassFormInputs from "./components/ClassFormInputs";
import AudioButton from "@/commons/components/AudioButton";
import Alert from "@/commons/components/Alert";

import firebase from "firebase";
import actionTypes from "@/commons/constants/action-types";
import getMessageError from "@/globals/utils/getMessageError.js";

export default {
  name: "class-add",
  extends: AbstractClassAddVue,
  components: {
    AudioButton,
    Alert,
    ClassFormActions,
    ClassFormInputs,
    ClassFormActions
  },
  data() {
    return {
      classContent: {
        code: ""
      },
      user: "",
      error: ""
    };
  },
  methods: {
    async add() {
      try {
        const userReference = firebase.firestore().collection("users").doc(this.user.uid);
        const classJoined = await this.$store.dispatch(actionTypes.JOIN_CLASS, {code: this.classContent.code, user: userReference});
        this.goToClassRoom(classJoined);
      } catch (error) {
        this.showError(error);
        console.log(error);
      }
    },
    goToClassRoom(classJoined) {
      this.$router.push({
        name: "studentClassRoom",
        params: { uid: classJoined.uid }
      });
    },
    showError(error) {
      const errorMessage = getMessageError(error);
      this.error = errorMessage;
      this.$modal.show("class-add");
    }
  }
};
</script>
