<template>
    <div  class="nes-container is-rounded exercise-card">
        <div @click="goToExercisePage" class="exercise-card__primary">
            <h3 class="exercise-card__primary--title">#{{exercise.index}}</h3>
        </div>
        <div class="exercise-card__secondary">
            <p @click="goToExercisePage" class="exercise-card__secondary--subtitle">{{limitCharacters(exercise.name)}}</p>
            <div>
                <button
                        v-if="exerciseAdd"
                        type="button"
                        class="nes-btn is-success"
                        @click="addExerciseToClass"
                >Adicionar</button>
                <button v-else type="button" class="nes-btn is-disabled">Adicionado</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import actionTypes from "@/commons/constants/action-types";
    import mutationTypes from '@/commons/constants/mutation-types'

    export default {
        name: "class-exercises-card",
        props: {
            exercise: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                exerciseAdd: true,
            }
        },
        mounted() {
            this.findChallengeToClass()
        },
        methods: {
            ...mapMutations([ mutationTypes.SET_CHALLENGE_CLASS]),
            addExerciseToClass() {
                this.$emit('addExerciseToClass')
            },
            async findChallengeToClass() {
                const response = await this.$store.dispatch(actionTypes.FIND_CLASS, this.$route.params.classroomId);
                const exercisesClass = response.challenges

                if(exercisesClass.length !== 0) {
                    for (let i = 0; i < exercisesClass.length ; i++) {
                        if(exercisesClass[i].uid.id === this.exercise.uid) {
                            this.exerciseAdd = false
                        }
                    }
                }
            },
            goToExercisePage() {
                this.$router.push({ name: this.exercise.router });
                this.setChallengeClass(this.exercise)
            },
            limitCharacters(string) {
                if (string && string.length > 40) return string.substring(0, 40) + "...";
                else return string;
            }
        }
    }
</script>
