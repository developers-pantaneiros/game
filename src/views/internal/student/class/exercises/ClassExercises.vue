<template>
  <class-wrapper>
    <div v-if="isLoading || isLoadedClassName">
      <loading/>
    </div>
    <div v-else class="scrollable">
      <class-name
              @isLoaded="isLoaded()"
      />
      <div class="margin-top-2 margin-bottom-2 center-text">
        <a href="#" class="nes-badge center-box margin-bottom-1">
          <span class="is-primary">Desafios</span>
        </a>
        <p class="subtitle">Lista de desafios para resolver.</p>
      </div>
      <div class="flex">
        <class-exercises-card
                v-for="item in exercises"
                v-bind:exercise="item"
                v-bind:key="item.index"
        />
      </div>
    </div>
  </class-wrapper>
</template>

<script>
  import actionTypes from "@/commons/constants/action-types";
  import ClassExercisesCard from "./components/ClassExercisesCard";
  import ClassName from "../commons/ClassName";
  import ClassWrapper from "../commons/ClassWrapper";
  import Loading from "@/commons/components/Loading";

  export default {
    name: "class-exercises",
    components: { ClassName, ClassExercisesCard,  ClassWrapper, Loading },
    data() {
      return {
        className: '',
        classroomId: '',
        exercises: [],
        isLoadedClassName: false,
        isLoading: true
      };
    },
    created() {
      this.getClassroomIdFromUrl();
    },
    methods: {
      async afterLoading() {
        this.isLoading = status;
      },
      async findChallenges() {
        try {
          this.exercises = await this.$store.dispatch(actionTypes.FIND_CHALLENGES_CLASS, this.classroomId);
          await this.afterLoading();
        } catch (error) {
          console.log(error);
        }
      },
      async getClassroomIdFromUrl() {
        this.classroomId = this.$route.params.classroomId;
        await this.findChallenges()
      },
      isLoaded(status) {
        this.isLoadedClassName = status
      }
    }
  };
</script>

<style lang="scss" scoped>
  .flex {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }

  .center-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
