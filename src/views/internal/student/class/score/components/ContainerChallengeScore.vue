<template>
    <div style="margin-top: 10px" class="nes-container is-rounded with-title">
        <p style="font-size: 14px">
        <center>
            <a class="nes-badge center-box margin-bottom-1">
                <span class="is-dark">{{challenge.nickName}}</span>
            </a>
        </center>
        </p>
        <p style="font-size: 12px; margin: 10px 0px 15px 5px">{{challenge.name}}</p>
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
        <progress v-else-if="isGreatScore" class="nes-progress is-success" :value="points" :max="MAX_SCORE"></progress>
        <progress v-else-if="isRegularScore" class="nes-progress is-warning" :value="points" :max="MAX_SCORE"></progress>
        <progress v-else class="nes-progress is-error" :value="points" :max="MAX_SCORE"></progress>
    </div>
</template>

<script>
    import actionTypes from "@/commons/constants/action-types";

    export default {
        name: "container-challenge-score",
        props: {
            challenge: {
                type: Object,
                required: true
            },
            studentId: {
                type: String,
                required: true
            },
            classroomId: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                MAX_SCORE: 9,
                MIN_SCORE: 3,
                points: null,
                time: null
            }
        },
        computed: {
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
        mounted() {
            this.findScoreChallenge()
        },
        methods: {
            async findScoreChallenge() {
                try {
                    const scoreFound = await this.$store.dispatch(actionTypes.FIND_SCORE_CHALLENGE, {
                        userId: this.studentId,
                        classroomId: this.classroomId,
                        challengeId: this.challenge.uid
                    });
                    this.getPoints(scoreFound.points)
                    this.getTime(scoreFound.time)

                } catch (error) {
                    console.log(error);
                }
            },
            async getPoints(points) {
                this.points = points
            },
            async getTime(time) {
                this.time = time
            }
        }
    }
</script>

<style scoped>

</style>