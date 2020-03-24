<template>
    <class-wrapper>
        <div v-if="isLoading">
            <loading/>
        </div>
        <div v-else class="margin-bottom-2 center-text">
            <a href="#" class="nes-badge center-box margin-bottom-1">
                <span class="is-warning">Pontuação</span>
            </a>
            <div style="margin-top: 10px" class="nes-container with-title">
                <p class="title">Desafio #1</p>
                <p>Mudanças de estado físico da matéria</p>
                <p>Pontuação: {{points}}</p>
                <p>Tempo total: {{time}} s</p>
                <progress v-if="scoreGreat()" class="nes-progress is-success" value="10" max="10"></progress>
                <progress v-if="scoreRegular()" class="nes-progress is-warning" value="5" max="10"></progress>
                <progress v-if="scoreBad()" class="nes-progress is-error" value="3" max="10"></progress>
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
            return this.points == 10 ? true : false
        },
        scoreRegular() {
            return this.points == 5 ? true : false
        },
        scoreBad() {
            return this.points == 3 ? true : false
        }
    }
}
</script>

