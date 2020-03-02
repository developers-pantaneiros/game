<template>
  <class-wrapper>
    <div class="margin-bottom-2 center-text">
      <h2 class="title">Exercícios</h2>
      <p class="subtitle">Lista de exercícios para resolver.</p>
    </div>
    <div class="flex">
      <class-exercises-card
        v-for="item in exercises"
        v-bind:exercicie="item"
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
        },
        {
          index: 2,
          name: "Reações químicas"
        },
        {
          index: 3,
          name: "Teoria dos conjuntos"
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
