<template>
  <class-wrapper>
    <div class="margin-bottom-2 center-text">
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
  </class-wrapper>
</template>

<script>
import ClassWrapper from "../commons/ClassWrapper";
import ClassExercisesCard from "./components/ClassExercisesCard";

export default {
  name: "class-exercises",
  components: { ClassWrapper, ClassExercisesCard },
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

.center-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
