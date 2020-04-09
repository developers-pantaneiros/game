<template>
    <class-wrapper>
        <div v-if="isLoading || isLoadedClassName">
            <loading/>
        </div>
        <div v-else class="margin-bottom-2">
            <class-name
                    @isLoaded="isLoaded()"
            />
            <a class="nes-badge center-box margin-top-2 margin-bottom-2 ">
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
                <p style="font-size: 12px; margin-left: 5px">Progresso: ({{points}}/{{MAX_SCORE}})</p>
                <progress v-if="isInitScore" class="nes-progress" :value="points" :max="MAX_SCORE"></progress>
                <progress v-if="isGreatScore" class="nes-progress is-success" :value="points" :max="MAX_SCORE"></progress>
                <progress v-if="isRegularScore" class="nes-progress is-warning" :value="points" :max="MAX_SCORE"></progress>
                <progress v-else class="nes-progress is-error" :value="points" :max="MAX_SCORE"></progress>
            </div>
        </div>
    </class-wrapper>
</template>

<script>
    import actionTypes from "@/commons/constants/action-types";
    import ClassName from "../commons/ClassName";
    import ClassWrapper from "../commons/ClassWrapper";
    import Loading from "@/commons/components/Loading";

export default {
    name: "class-score",
    components: { ClassName, ClassWrapper, Loading},
    data() {
        return {
            className: '',
            isLoadedClassName: false,
            isLoading: true,
            MAX_SCORE: 9,
            MIN_SCORE: 3,
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
        },
        isGreatScore: function () {
            return this.points === this.MAX_SCORE;
        },
        isInitScore: function () {
            return this.points === 0;
        },
        isRegularScore: function () {
            return ((this.points > this.MIN_SCORE) && (this.points < this.MAX_SCORE))
        }
    },
    methods: {
        async afterLoading() {
            this.isLoading = status;
        },
        async findClass() {
            try {
                const response = await this.$store.dispatch(actionTypes.FIND_CLASS, this.uid);
                this.className = response.name
                debugger
                await this.afterLoading();
            } catch (error) {
                console.log(error);
            }
        },
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
        async getUidFromUrl() {
            this.uid = this.$route.params.studentId;
            await this.findScore()
            await this.findClass()
        },
        async getPoints(points) {
            this.points = points
        },
        async getTime(time) {
            this.time = time
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

