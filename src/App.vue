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
  mounted() {
    this.buildState()
  },
  methods: {
    async buildState() {
        let userId = await localStorage.getItem('user')
        let classroomId = await localStorage.getItem('class')

        if (userId !== "undefined") {
          await this.getUser(userId)
          await this.getStudentClasses(userId)
        }

        if (classroomId !== "undefined") {
          await this.getClassroom(classroomId)
        }
    },
    async getUser(userId) {
      await this.$store.dispatch(actionTypes.FIND_USER, userId);
    },
    async getStudentClasses(userId) {
      await this.$store.dispatch(actionTypes.FIND_STUDENT_CLASSES, userId);
    },
    async getClassroom(classroomId) {
      await this.$store.dispatch(actionTypes.FIND_CLASS, classroomId);
    }
  }
};
</script>

<style lang="stylus">

</style>
