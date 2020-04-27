<template>
    <class-wrapper>
        <div v-if="isLoading || isLoadedClassName">
            <loading/>
        </div>
        <div v-else style="padding: 10px" class="scrollable">
            <class-name
                    @isLoaded="isLoaded()"
            />
            <hr class="line-separator">
            <div class="margin-top-2 margin-bottom-2 center-text">
                <a href="#" class="nes-badge center-box margin-bottom-1">
                    <span class="is-primary">Desafios</span>
                </a>
                <p class="subtitle">Clique no card para testar o desafio. Para adiconá-lo à sua turma clique em "Adiconar"</p>
            </div>
            <div class="flex">
                <class-exercises-card
                        v-for="item in exercises"
                        v-bind:exercise="item"
                        v-bind:key="item.index"
                        @addExerciseToClass="addExerciseToClass(item.uid)"
                />
            </div>
        </div>
        <alert id="confirm-add-exercise" title="Desafio adicionado" :message="info" :octocat="true" confirmMessage="Confirmar" />
    </class-wrapper>
</template>

<script>
    import actionTypes from "@/commons/constants/action-types";
    import Alert from "@/commons/components/Alert"
    import ClassName from "../commons/ClassName";
    import ClassExercisesCard from "./components/ClassExercisesCard";
    import ClassWrapper from "../commons/ClassWrapper";
    import Loading from "@/commons/components/Loading";

    export default {
        name: "class-exercides",
        components: { Alert, ClassName, ClassExercisesCard, ClassWrapper, Loading },
        data() {
            return {
                className: '',
                classroomId: '',
                exercises: [],
                info: 'O desafio foi adicionado à turma com sucesso. Agora seus alunos já podem iniciar a aventura.',
                isLoadedClassName: false,
                isLoading: true
            };
        },
        created() {
            this.getClassroomIdFromUrl();
        },
        methods: {
            async addExerciseToClass(challengeId) {
                try {
                    await this.$store.dispatch(actionTypes.JOIN_CHALLENGE_TO_CLASS, {
                        challengeId: challengeId,
                        classroomId: this.classroomId
                    });
                    this.$modal.show("confirm-add-exercise");
                } catch (error) {
                    console.log(error);
                }
            },
            async afterLoading() {
                this.isLoading = status;
            },
            async findChallenges() {
                try {
                    const exercises = await this.$store.dispatch(actionTypes.FIND_CHALLENGES);
                    await this.indexExercises(exercises)
                    await this.afterLoading();
                } catch (error) {
                    console.log(error);
                }
            },
            async getClassroomIdFromUrl() {
                this.classroomId = this.$route.params.classroomId;
                await this.findChallenges()
            },
            indexExercises(exercises) {
                for (let i = 0; i < exercises.length ; i++) {
                    exercises[i].index = i + 1
                }
                this.exercises = exercises
            },
            isLoaded(status) {
                this.isLoadedClassName = status
            }
        }
    }
</script>

<style scoped>
    .flex {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>