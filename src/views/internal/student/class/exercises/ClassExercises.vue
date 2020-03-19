<template>
  <class-wrapper>
    <div class="margin-bottom-2 center-text">
      <h2 class="title">Exercícios</h2>
      <p id="list-exercises" class="subtitle">Lista de exercícios para resolver.</p>
      <audio-button :tagId="'list-exercises'" />
    </div>
    <div class="flex">
      <class-exercises-card
        v-for="item in exercises"
        v-bind:exercise="item"
        v-bind:key="item.index"
      />
    </div>
  </class-wrapper>
</template>

<script>
import AudioButton from "@/commons/components/AudioButton";
import ClassWrapper from "../commons/ClassWrapper";
import ClassExercisesCard from "./components/ClassExercisesCard";

export default {
  name: "class-exercises",
  components: { AudioButton, ClassWrapper, ClassExercisesCard },
  data() {
    return {
      exercises: [
        {
          index: 1,
          name: "Mudança de estados físicos da matéria"
        }
      ]
    };
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
</style>
