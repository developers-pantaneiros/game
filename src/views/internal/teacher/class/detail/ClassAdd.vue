<template>
  <section class="nes-container with-title is-centered">
    <p class="title">Criar classe</p>
    <p>Para continuar, insira as informações da turma nos campos abaixo.</p>
    <form @submit.prevent="add">
      <class-form-inputs v-model="classValue" />
      <class-form-actions />
    </form>
    <alert id="class-add" title="Erro" :message="error" confirmMessage="Confirmar" />
  </section>
</template>

<script>
import ClassFormInputs from "./components/ClassFormInputs";
import ClassFormActions from "./components/ClassFormActions";
import Alert from "@/commons/components/Alert";

import firebase from "firebase";
import actionTypes from "@/commons/constants/action-types";
import getMessageError from "@/globals/utils/getMessageError.js";

export default {
  name: "signup",
  components: { ClassFormInputs, ClassFormActions, Alert },
  data() {
    return {
      classValue: {
        name: "",
        description: "",
        teacher: ""
      },
      error: ""
    };
  },
  created() {
    this.getCurrentUserUid();
  },
  methods: {
    async add() {
      try {
        const classToSave = this.buildClassToSave();
        const createdClass = await this.$store.dispatch(actionTypes.CREATE_CLASS, classToSave);
        console.log(createdClass);
      } catch (error) {
        this.showError(error);
      }
    },
    buildClassToSave() {
      const teacherReference = firebase.firestore().collection("users").doc(this.classValue.teacher);
      const classToSave = {
        name: this.classValue.name,
        description: this.classValue.description,
        teacher: teacherReference,
        students: [],
        createdAt: new Date(),
        updatedAt: new Date()
      };
      return classToSave;
    },
    getCurrentUserUid() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.classValue.teacher = user.uid;
        } else {
          this.goToSigninPage();
        }
      });
    },
    goToSigninPage() {
      this.$router.push({ name: "signin" });
    },
    showError(error) {
      const errorMessage = getMessageError(error);
      this.error = errorMessage;
      document.getElementById("class-add").showModal();
    }
  }
};
</script>
