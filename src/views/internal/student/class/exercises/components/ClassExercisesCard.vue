<template>
    <div @click="goToExercisePage" class="nes-container is-rounded exercise-card">
        <div class="exercise-card__primary">
            <h3 class="exercise-card__primary--title">#{{exercise.index}}</h3>
        </div>
        <div class="exercise-card__secondary">
            <h1 class="exercise-card__secondary--subtitle">{{limitCharacters(exercise.name)}}</h1>
            <div>
                <span class="exercise-card__secondary--description">Pontuação:</span>
                <div class="exercise-card__secondary--stars">
                    <i class="nes-icon is-small star"></i>
                    <i class="nes-icon is-small star"></i>
                    <i class="nes-icon is-small star"></i>
                    <i class="nes-icon is-small star"></i>
                    <i class="nes-icon is-small star"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import mutationTypes from '@/commons/constants/mutation-types'

    export default {
        name: "class-exercises-card",
        props: {
            exercise: {
                type: Object,
                required: true
            }
        },
        methods: {
            ...mapMutations([ mutationTypes.SET_CHALLENGE_CLASS]),
            limitCharacters(string) {
                if (string && string.length > 40) return string.substring(0, 40) + "...";
                else return string;
            },
            goToExercisePage() {
                const router = "student"+this.exercise.router
                this.$router.push({ name: router });
                this.setChallengeClass(this.exercise)
            }
        }
    }
</script>
