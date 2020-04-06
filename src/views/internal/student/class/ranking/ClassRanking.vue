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
                <p style="font-size: 12px; margin-left: 5px">Progresso: ({{points}}/10)</p>
                <progress v-if="scoreGreat()" class="nes-progress is-success" value="10" max="10"></progress>
                <progress v-if="scoreRegular()" class="nes-progress is-warning" value="5" max="10"></progress>
                <progress v-if="scoreBad()" class="nes-progress is-error" value="3" max="10"></progress>
                <progress v-if="scoreInit()" class="nes-progress is-error" value="0" max="10"></progress>
            </div>
        </div>
    </class-wrapper>
</template>

<script>
import actionTypes from "@/commons/constants/action-types";
import ClassWrapper from "../commons/ClassWrapper";
import Loading from "@/commons/components/Loading";

export default {
    name: "class-ranking",
    components: { ClassWrapper, Loading},
    data() {
        return {
            isLoading: true,
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
            return this.points === 10 ? true : false
        },
        scoreRegular() {
            return this.points === 5 ? true : false
        },
        scoreBad() {
            return this.points === 3 ? true : false
        },
        scoreInit() {
            return this.points === 0 ? true : false
        },
    }
}
</script>

<style lang="stylus">
    progress
        height 38px !important
</style>

