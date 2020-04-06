<template>
    <class-wrapper>
        <div v-if="isLoading">
            <loading/>
        </div>
        <div v-else class="margin-bottom-2">
            <a class="nes-badge center-box margin-bottom-2">
                <span class="is-warning">Desempenho</span>
            </a>
            <div style="margin-top: 10px" class="nes-container is-rounded with-title">
                <p style="font-size: 14px">
                    <a class="nes-badge center-box margin-bottom-1">
                        <span class="is-dark">Desafio #1</span>
                    </a>
                </p>
                <p style="font-size: 12px; margin: 10px 0px 15px 5px">Mudanças de estados físicos da matéria</p>
                <a style="font-size: 12px" class="nes-badge is-splited">
                    Pontuação:
                    <span class="is-warning">{{points}}</span>
                    <span class="is-dark">pontos</span>
                </a>
                <p style="padding-bottom: 10px"></p>
                <a style="font-size: 12px" class="nes-badge is-splited">
                    Tempo:
                    <span class="is-primary">{{time}}</span>
                    <span class="is-dark">segundos</span>
                </a>
                <p style="padding-bottom: 5px"></p>
                <p style="font-size: 12px; margin-left: 5px">Progresso: ({{points}}/{{maxScore}})</p>
                <progress v-if="scoreGreat()" class="nes-progress is-success" value="9" max="9"></progress>
                <progress v-if="scoreRegularOne()" class="nes-progress is-warning" value="8" max="9"></progress>
                <progress v-if="scoreRegularTwo()" class="nes-progress is-warning" value="7" max="9"></progress>
                <progress v-if="scoreRegularThree()" class="nes-progress is-warning" value="6" max="9"></progress>
                <progress v-if="scoreRegularFour()" class="nes-progress is-warning" value="5" max="9"></progress>
                <progress v-if="scoreBad()" class="nes-progress is-error" value="3" max="9"></progress>
                <progress v-if="scoreInit()" class="nes-progress is-error" value="0" max="9"></progress>
            </div>
        </div>
    </class-wrapper>
</template>

<script>
import actionTypes from "@/commons/constants/action-types";
import ClassWrapper from "../commons/ClassWrapper";
import Loading from "@/commons/components/Loading";

export default {
    name: "class-score",
    components: { ClassWrapper, Loading},
    data() {
        return {
            isLoading: true,
            maxScore: 9,
            points: null,
            time: null,
            uid: null
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
        async findScore() {
            try {
                const scoreFound = await this.$store.dispatch(actionTypes.FIND_SCORE_USER, this.uid);
                this.getPoints(scoreFound.first.points)
                this.getTime(scoreFound.first.time)
                await this.afterLoading();
            } catch (error) {
                console.log(error);
            }
        },
        getUidFromUrl() {
            this.uid = this.$route.params.studentId;
            this.findScore()
        },
        async getPoints(points) {
            this.points = points
        },
        async getTime(time) {
            this.time = time
        },
        async afterLoading() {
            this.isLoading = status;
        },
        scoreGreat() {
            return this.points === 9
        },
        scoreRegularOne() {
            return this.points === 8
        },
        scoreRegularTwo() {
            return this.points === 7
        },
        scoreRegularThree() {
            return this.points === 6
        },
        scoreRegularFour() {
            return this.points === 5
        },
        scoreBad() {
            return this.points > 0 && this.points < 5
        },
        scoreInit() {
            return this.points === 0
        },
    }
}
</script>

<style lang="stylus">
    progress
        height 38px !important
</style>

