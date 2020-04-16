<template>
  <div class="wrapper-app wrapper-app__full">
    <router-view />
    <pounds-translator />
    <audio-button />
    <feedback-button />
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

        if (this.hasUserId(userId)) {
          await this.getUser(userId)
          await this.getStudentClasses(userId)
        }

        if (this.hasClassroomId(classroomId)) {
          await this.getClassroom(classroomId)
        }
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
    hasClassroomId(classroomId) {
      return classroomId !== "undefined"
    },
    hasUserId(userId) {
      return userId !== "undefined"
    }
  }
};
</script>

<style lang="stylus">

</style>
