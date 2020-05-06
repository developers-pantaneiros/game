<template>
  <div class="wrapper-app wrapper-app__full">
    <router-view />
    <pounds-translator />
    <audio-button />
    <feedback-button
      v-if="isLogged()"
    />
  </div>
</template>

<script>
  import actionTypes from '@/commons/constants/action-types'
  import PoundsTranslator from "./commons/components/PoundsTranslator";
  import AudioButton from "./commons/components/AudioButton";
  import FeedbackButton from "./commons/components/FeedbackButton";

export default {
  name: "App",
  components: { AudioButton, FeedbackButton, PoundsTranslator },
  async mounted() {
    await this.buildState()
  },
  methods: {
    async buildState() {
        let userId = await localStorage.getItem('user')
        let classroomId = await localStorage.getItem('class')
        let challengeId = await localStorage.getItem('challenge')

        if (this.hasUserId(userId)) {
          await this.getUser(userId)
          await this.getStudentClasses(userId)
        }

        if (this.hasClassroomId(classroomId)) {
          await this.getClassroom(classroomId)
          await this.getChallenges(classroomId)
        }

        if (this.hasChallengeId(challengeId)) {
          await this.getChallenge(challengeId)
        }
    },
    async getChallenge(challengeId) {
      await this.$store.dispatch(actionTypes.FIND_CHALLENGE, challengeId)
    },
    async getChallenges(classrromId) {
      await this.$store.dispatch(actionTypes.FIND_CHALLENGES_CLASS, classrromId)
    },
    async getClassroom(classroomId) {
      await this.$store.dispatch(actionTypes.FIND_CLASS, classroomId);
    },
    async getStudentClasses(userId) {
      await this.$store.dispatch(actionTypes.FIND_STUDENT_CLASSES, userId);
    },
    async getUser(userId) {
      await this.$store.dispatch(actionTypes.FIND_USER, userId);
    },
    hasChallengeId(challengeId) {
      return challengeId !== "undefined" && challengeId !== null
    },
    hasClassroomId(classroomId) {
      return classroomId !== "undefined" && classroomId !== null
    },
    hasUserId(userId) {
      return userId !== "undefined" && userId !== null
    },
    isLogged() {
      let user = localStorage.getItem('user')
      return user !== "undefined" && user !== null
    }
  }
};
</script>

<style lang="stylus">

</style>
