<template>
    <class-wrapper>
        <div v-if="isLoading || isLoadedClassName">
            <loading/>
        </div>
        <div v-else class="scrollable">
            <class-name
                    @isLoaded="isLoaded()"
            />
            <a class="nes-badge center-box margin-top-2 margin-bottom-2 ">
                <span class="is-warning">Desempenho</span>
            </a>
            <container-challenge-score
                    v-for="item in challenges"
                    :challenge="item"
                    :key="item.index"
                    :studentId="studentId"
                    :classroomId="clasroomId"
            />
        </div>
    </class-wrapper>
</template>

<script>
    import actionTypes from "@/commons/constants/action-types";
    import ContainerChallengeScore from "./components/ContainerChallengeScore";
    import ClassName from "../commons/ClassName";
    import ClassWrapper from "../commons/ClassWrapper";
    import Loading from "@/commons/components/Loading";

    export default {
        name: "class-score",
        components: { ContainerChallengeScore, ClassName, ClassWrapper, Loading },
        data() {
            return {
                challenges: [],
                clasroomId: null,
                isLoadedClassName: false,
                isLoading: true,
                studentId: null
            }
        },
        created() {
            this.getUidFromUrl();
        },
        computed: {
            canIShowClass: function () {
                return !this.isLoading;
            }
        },
        methods: {
            async afterLoading() {
                this.isLoading = status;
            },
            async findChallenges() {
                let challenges = await this.$store.dispatch(actionTypes.FIND_CHALLENGES_CLASS, this.clasroomId)
                for (let i = 0; i < challenges.length ; i++) {
                    challenges[i].nickName = "Desafio " + challenges[i].index
                }
                this.challenges = challenges
                await this.afterLoading();
            },
            async getUidFromUrl() {
                this.studentId = this.$route.params.studentId;
                this.clasroomId = this.$route.params.classroomId;
                this.findChallenges()
            },
            isLoaded(status) {
                this.isLoadedClassName = status
            }
        }
    }
</script>

<style lang="stylus">
    progress
        height 38px !important
</style>

