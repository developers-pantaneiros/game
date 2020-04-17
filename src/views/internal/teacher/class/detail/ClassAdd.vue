<template>
  <section class="container">
    <div class="center-text">
      <h3 class="title">Criar classe</h3>
      <p class="subtitle">Para criar uma nova classe, insira as informações da turma nos campos abaixo e confirme.</p>
    </div>
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
  components: { Alert, ClassFormInputs, ClassFormActions },
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
        const createdClass = await this.$store.dispatch(
          actionTypes.CREATE_CLASS,
          classToSave
        );
        this.goToClassView(createdClass);
      } catch (error) {
        this.showError(error);
      }
    },
    buildClassToSave() {
      const teacherReference = firebase
        .firestore()
        .collection("users")
        .doc(this.classValue.teacher);
      const classToSave = {
        name: this.classValue.name,
        description: this.classValue.description,
        teacher: teacherReference,
        students: [],
        challenges:[
          {
            uid: firebase.firestore().collection("challenges").doc("gP99kKBmOfzBmBBYBNW2"),
            performances: []
          }
        ],
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
    goToClassView(createdClass) {
      this.$router.push({
        name: "teacherClassView",
        params: { classroomId: createdClass.uid }
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
