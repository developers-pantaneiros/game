<template>
    <class-wrapper>
        <div class="margin-bottom-2 center-text">
            <h2 class="title">Exercícios</h2>
            <p class="subtitle">Lista de exercícios para resolver.</p>
        </div>
        <div class="flex">
            <class-exercicies-card
                v-for="item in exercicies"
                v-bind:exercicie="item"
                v-bind:key="item.index"/>
        </div>
    </class-wrapper>
</template>

<script>
import ClassWrapper from "../commons/ClassWrapper";
import ClassExerciciesCard from "./components/ClassExerciciesCard";

export default {
    name: "class-exercicies",
    components: { ClassWrapper, ClassExerciciesCard },
    data() {
        return {
            exercicies: [
                {
                    index: 1,
                    name: 'Mudança de estados físicos da matéria'
                },
                {
                    index: 2,
                    name: 'Mudança de estados físicos da matéria'
                },
                {
                    index: 3,
                    name: 'Mudança de estados físicos da matéria'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .flex {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>
