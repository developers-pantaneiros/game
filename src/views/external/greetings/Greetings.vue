<template>
  <section class="container center-text">
    <div class="margin-bottom-2 carousel padding-left-2 padding-right-2">
      <greetings-carousel />
    </div>
    <router-link to="signin" class="nes-btn is-success full-width-button">Jogar</router-link>
  </section>
</template>

<script>
import GreetingsCarousel from "./components/GreetingsCarousel";
import { version } from "@/../package.json";

export default {
  name: "greetings",
  components: { GreetingsCarousel },
  data() {
    return {
      version: version
    };
  },
  async mounted() {
    await this.initRouter()
  },
  methods: {
    hasUserId(userId) {
      return userId !== "undefined"
    },
    async initRouter() {
      let userId = await localStorage.getItem('user')
      let role = await localStorage.getItem('role')

      if(this.hasUserId(userId)) {
        if(this.isStudent(role)) {
          this.$router.push({name: "studentClass", params: {studentId: userId}})
        } else if (this.isTeacher(role)) {
          this.$router.push({name: "teacherClass", params: {teacherId: userId}})
        } else {
          this.$router.push({name: "greetings"})
        }
      }
    },
    isStudent(role) {
      return role === "student"
    },
    isTeacher(role) {
      return role === "teacher"
    }
  }
};
</script>
