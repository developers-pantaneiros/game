<template>
    <class-wrapper>
        <div v-if="isLoading || isLoadedClassName">
            <loading/>
        </div>
        <div class="ranking-details scrollable" v-else>
            <class-name
                    @isLoaded="isLoaded()"
            />
            <center>
                <a class="nes-badge center-box margin-top-3 margin-bottom-2 ">
                    <span style="font-size: 20px" class="is-warning">Ranking</span>
                </a>
            </center>
            <class-ranking-challenge-select
                    :value="challenges"
                    @goToFilter="goToFilter"
            />
            <div v-if="rankingSelected" class="nes-container is-rounded with-title">
                <p style="font-size: 14px">
                <center>
                    <a class="nes-badge margin-bottom-2">
                        <span style="font-size: 16px" class="is-dark">{{titleRanking}}</span>
                    </a>
                </center>
                </p>
                <div v-if="!isRankingEmpty()" class="flex">
                    <classroom-student-card-ranking v-model="ranking" />
                </div>
                <div v-else class="flex center-text">
                    <i class="nes-octocat animate"></i>
                    <p style="margin-top: 10px" class="subtitle">Não existem dados registrados.</p>
                </div>
            </div>
            <div v-else class="center-text">
                <i class="nes-octocat animate"></i>
                <p style="margin-top: 10px" class="subtitle">Selecione um filtro para visualizar o ranking.</p>
            </div>
        </div>
    </class-wrapper>
</template>

<script>
    import actionTypes from "@/commons/constants/action-types";
    import ClassName from "../commons/ClassName";
    import ClassRankingChallengeSelect from "./components/ClassRankingChallengeSelect";
    import ClassroomStudentCardRanking from "../commons/ClassroomStudentCardRanking";
    import ClassWrapper from "../commons/ClassWrapper";

    export default {
        name: "class-ranking",
        components: {ClassName, ClassRankingChallengeSelect, ClassroomStudentCardRanking, ClassWrapper},
        data() {
            return {
                challenges: [],
                classroomId: null,
                isLoadedClassName: false,
                isLoading: true,
                rankingSelected: false,
                titleRanking: undefined,
                ranking: []
            }
        },
        created() {
            this.getUidFromUrl();
        },
        mounted() {
            this.buildChallengesFilter()
        },
        methods: {
            async afterLoading() {
                this.isLoading = status;
            },
            async buildChallengesFilter() {
                const challenges = await this.$store.dispatch(actionTypes.FIND_CHALLENGES_CLASS, this.classroomId)
                this.challenges = [{name: "Geral", uid: "general"}]
                for (let i = 0; i < challenges.length ; i++) {
                    const challenge = {
                        name: "Desafio " + challenges[i].index,
                        uid: challenges[i].uid
                    }
                    this.challenges.push(challenge)
                }
            },
            async findRankingByUid(challengeUid) {
                try {
                    if (challengeUid === "general") {
                        this.ranking = await this.$store.dispatch(actionTypes.FIND_CLASS_RANKING, this.classroomId)
                    } else {
                        this.ranking = await this.$store.dispatch(actionTypes.FIND_CLASS_RANKING_BY_CHALLENGE, {
                            classroomId: this.classroomId,
                            challengeId: challengeUid
                        });
                    }
                } catch (error) {
                    console.log(error);
                }
            },
            async getUidFromUrl() {
                this.classroomId = this.$route.params.classroomId;
                await this.afterLoading();
            },
            async goToFilter(challengeUid) {
                await this.findRankingByUid(challengeUid)
                this.setChallengeName(challengeUid)
                this.rankingSelected = true
            },
            async isLoaded(status) {
                this.isLoadedClassName = status
            },
            isRankingEmpty() {
                return this.ranking.length === 0
            },
            setChallengeName(challengeUid) {
                for (let i = 0; i < this.challenges.length; i++) {
                    if(this.challenges[i].uid === challengeUid) {
                        this.titleRanking = this.challenges[i].name
                    }
                }
            }
        }
    }
</script>

<style lang="stylus">
    .ranking-details
        .flex
            display flex
            align-items center
            flex-wrap wrap
            justify-content center

</style>