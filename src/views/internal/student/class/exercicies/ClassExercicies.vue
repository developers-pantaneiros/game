<template>
  <class-wrapper>
    <div class="margin-bottom-2 center-text">
      <h2 class="title">Exercícios</h2>
      <p id="list-exercises" class="subtitle">Lista de exercícios para resolver.</p>
      <audio-button :tagId="'list-exercises'" />
    </div>
    <div class="flex">
      <class-exercicies-card
        v-for="item in exercicies"
        v-bind:exercicie="item"
        v-bind:key="item.index"
      />
    </div>
  </class-wrapper>
</template>

<script>
import AudioButton from "@/commons/components/AudioButton";
import ClassWrapper from "../commons/ClassWrapper";
import ClassExerciciesCard from "./components/ClassExerciciesCard";

export default {
  name: "class-exercicies",
  components: { AudioButton, ClassWrapper, ClassExerciciesCard },
  data() {
    return {
      exercicies: [
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
