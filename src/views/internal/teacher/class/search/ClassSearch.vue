<template>
  <div class="container">
    <div v-if="canIShowClasses">
      <class-search-action @add="add" />
      <div id="list-class-text">
        <div class="margin-bottom-2">
          <h3 class="title">Minhas classes</h3>
          <p class="subtitle">Listagem de classes que ministro aulas.</p>
        </div>
        <class-search-card v-for="item in classes" v-bind:classValue="item" v-bind:key="item.uid" />
        <audio-button :tagId="'list-class-text'" />
      </div>
    </div>
    <div v-else-if="canIShowEmptyAlert">
      <class-search-action @add="add" />
      <empty
        id="text-not-found-class"
        title="Ops, não encontramos nenhuma classe"
        subtitle="Tente criar uma classe e convidar seus alunos..."
      />
      <audio-button :tagId="'text-not-found-class'" />
    </div>
    <div v-else>
      <loading />
    </div>
  </div>
</template>

<script>
import AudioButton from "@/commons/components/AudioButton";
import ClassSearchAction from "./components/ClassSearchAction";
import ClassSearchCard from "./components/ClassSearchCard";
import Empty from "@/commons/components/Empty";
import Loading from "@/commons/components/Loading";

import firebase from "firebase";
import actionTypes from "@/commons/constants/action-types";

export default {
  name: "class-search",
  components: {
    AudioButton,
    ClassSearchAction,
    ClassSearchCard,
    Empty,
    Loading
  },
  data() {
    return {
      user: {},
      classes: [],
      isLoading: true,
      isEmpty: false
    };
  },
  computed: {
    canIShowClasses: function() {
      return !this.isLoading && !this.isEmpty;
    },
    canIShowEmptyAlert: function() {
      return this.isEmpty;
    }
  },
  created() {
    this.getCurrentUserUid();
  },
  methods: {
    async findTeacherClasses() {
      try {
        const classes = await this.$store.dispatch(
          actionTypes.FIND_TEACHER_CLASSES,
          this.user.uid
        );
        this.setClasses(classes);
        this.afterLoading();
      } catch (error) {
        console.log(error);
      }
    },
    setClasses(classes) {
      this.classes = classes;
    },
    afterLoading() {
      this.isLoading = false;
      this.isEmpty = this.classes.length <= 0;
    },
    getCurrentUserUid() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.user = user;
          this.findTeacherClasses();
        } else {
          this.goToSigninPage();
        }
      });
    },
    goToSigninPage() {
      this.$router.push({ name: "signin" });
    },
    add() {
      this.$router.push({ name: "teacherClassAdd" });
    }
  }
};
</script>
