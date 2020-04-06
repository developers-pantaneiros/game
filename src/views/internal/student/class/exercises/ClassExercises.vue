<template>
  <class-wrapper>
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
  </class-wrapper>
</template>

<script>
import ClassExercisesCard from "./components/ClassExercisesCard";
import ClassName from "../commons/ClassName";
import ClassWrapper from "../commons/ClassWrapper";

export default {
  name: "class-exercises",
  components: { ClassName, ClassExercisesCard,  ClassWrapper },
  data() {
    return {
      className: '',
      exercises: [
        {
          index: 1,
          name: "Mudança de estados físicos da matéria"
        }
      ],
      isLoadedClassName: false
    };
  },
  methods: {
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
