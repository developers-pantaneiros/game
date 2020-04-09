<template>
    <div class="container container__full">
        <div id="exercise-one" class="margin-bottom-1 center-text">
            <h2 class="title title--small">Desafio #1 - Mudança de estados físicos da matéria!</h2>
        </div>
        <div>
            <div class="center-text">
                <p class="title title--small">Estados da matéria:</p>
                <p class="subtitle subtitle--small">Role para a direita para ver mais estados.</p>
            </div>
            <draggable class="list-group" v-model="physicalStates" group="people" :move="onMoveElement">
                <transition-group class="draggable-list" :style="getPaddingForEmptyList(physicalStates)">
                    <div class="draggable-list__item" v-for="element in physicalStates" :key="element.id">
                        <img class="draggable-list__item--photo" :src="element.photo" :alt="element.value" v-if="element.photo">
                        <p class="draggable-list__item--text">{{ element.value }}</p>
                    </div>
                </transition-group>
            </draggable>
            <br>
            <div class="center-text">
                <p class="title title--small">Mudança de estado:</p>
                <a class="nes-badge">
                    <span class="is-primary">{{stateChanges[counter]}}</span>
                </a>
                <p class="subtitle subtitle--small">Arraste os estados que julgar correto para esse espaço.</p>
            </div>
            <div>
                <draggable class="list-group" v-model="answerList" group="people" :move="onMoveElement">
                    <transition-group class="draggable-list" :style="getPaddingForEmptyList(answerList)">
                        <div class="draggable-list__item" v-for="element in answerList" :key="element.id">
                            <img class="draggable-list__item--photo" :src="element.photo" :alt="element.value" v-if="element.photo">
                            <p class="draggable-list__item--text">{{ element.value }}</p>
                        </div>
                    </transition-group>
                </draggable>
            </div>
            <br>
            <div class="center-button">
                <button slot="footer" class="nes-btn is-success full-width" @click="checkPhysicalStatesOrder">{{messageButton}}</button>
                <button slot="footer" class="nes-btn is-warning margin-top-1 full-width" @click="clear">Reiniciar</button>
                <button type="button" class="nes-btn is-error margin-top-1 full-width" @click="close">Fechar Desafio</button>
            </div>
        </div>
        <alert id="instructions-alert" title="Instruções" :message="info" :octocat="true" confirmMessage="Confirmar" />
        <alert id="correct-answer" title="Resposta correta!" :message="info" :octocat="true" confirmMessage="Confirmar" />
        <alert id="wrong-answer" title="Resposta errada!" :message="error" :octocat="true" confirmMessage="Confirmar" />
    </div>
</template>

<script>
    import actionTypes from "@/commons/constants/action-types";
    import draggable from "vuedraggable";
    import shuffle from "@/globals/utils/shuffle";
    import Alert from "@/commons/components/Alert";

    import ice from "@/assets/images/ice.png"
    import water from "@/assets/images/water.png"
    import rain from "@/assets/images/rain.png"

    export default {
        name: "exercise-first",
        components: { Alert, draggable },
        data() {
            return {
                answerList: [],
                correctOrderIds: {
                    fusion: [0, 1],
                    evaporation: [1, 2],
                    condensation: [2, 3]
                },
                counter: 0,
                counterErrors: 0,
                timer: {
                    seconds: 0
                },
                totalTime: 0,
                error: '',
                info: '',
                messageButton: 'Próximo',
                physicalStates: [],
                score: {
                    first: {
                        points: 0,
                        time: 0
                    },
                    total: {
                        points: 0,
                        time: 0
                    }
                },
                stateChanges: ['Fusão', 'Evaporação', 'Condensação'],
                uid: null
            }
        },
        mounted() {
            this.openModalInstructions();
        },
        created() {
            this.getUidFromUrl();
            this.createPhysicalStates();
            this.shufflePhysicalStates();
            this.initTimer();
        },
        methods: {
            async calculateScore() {
                if (this.counterErrors === 0) {
                    this.score.first.points = 9
                    this.score.total.points += 9
                } else if (this.counterErrors <  2) {
                    this.score.first.points = 8
                    this.score.total.points += 8
                } else if (this.counterErrors <  3) {
                    this.score.first.points = 7
                    this.score.total.points += 7
                } else if (this.counterErrors <  4) {
                    this.score.first.points = 6
                    this.score.total.points += 6
                } else if (this.counterErrors <  5) {
                    this.score.first.points = 5
                    this.score.total.points += 5
                } else {
                    this.score.first.points = 3
                    this.score.total.points += 3
                }
                await this.$store.dispatch(actionTypes.UPDATE_SCORE_USER, {
                    user: this.uid,
                    score: this.score
                });
            },
            calculateTime() {
                this.score.first.time = this.totalTime
                this.score.total.time += this.totalTime
            },
            checkPhysicalStatesOrder() {
                if (this.isPysicalStatesInCorrectOrder() && !this.isListEmpty(this.answerList)) {
                    if (this.isLastChallenge()) {
                        this.reloadTimer()
                        this.calculateTime()
                        this.calculateScore()
                        this.$router.push({ name: "feedbackExerciseFirst", params: {uid: this.$store.state.class.uid}});
                    } else {
                        this.openModalCorrectAnswer()
                    }
                    this.destroyInterval()
                    this.clear()
                    this.incrementCounter()
                    if (this.isLastChallenge()) {
                        this.messageButton = 'Finalizar'
                    }
                } else {
                    this.counterErrors += 1
                    this.openModalWrongAnswer()
                }
            },
            clear() {
                this.answerList = []
                this.createPhysicalStates()
                this.shufflePhysicalStates()
                this.initTimer()
            },
            close() {
                this.$router.push({ name: "studentExercises", params: {uid: this.$store.state.class.uid}});
            },
            createPhysicalStates() {
                this.physicalStates = [
                    {
                        id: 0,
                        photo: ice,
                        value: 'Sólido'
                    },
                    {
                        id: 1,
                        photo: water,
                        value: 'Líquido'
                    },
                    {
                        id: 2,
                        photo: rain,
                        value: 'Gasoso'
                    },
                    {
                        id: 3,
                        photo: rain,
                        value: 'Líquido'
                    }
                ]
            },
            destroyInterval() {
                clearInterval(this.interval)
            },
            getPaddingForEmptyList(list) {
                if (this.isListEmpty(list)) {
                    return 'padding: 4rem;'
                }
            },
            getUidFromUrl() {
                this.uid = this.$route.params.studentId;
            },
            incrementCounter() {
                if (this.counter < 2) {
                    this.counter = this.counter + 1
                }
            },
            initTimer() {
                this.interval = setInterval(() => { this.updateTimer() }, 1000);
            },
            isCondensationProcess() {
                return this.counter === 2
            },
            isFusionProcess() {
                return this.counter === 0
            },
            isEvaporationProcess() {
                return this.counter === 1
            },
            isLastChallenge() {
                return this.counter === 2
            },
            isListEmpty(list) {
                return list.length === 0;
            },
            isPysicalStatesInCorrectOrder() {
                for (let i = 0; i < this.answerList.length; i++) {
                    if( this.isFusionProcess()) {
                        if (this.answerList[i].id !== this.correctOrderIds.fusion[i]) {
                            return false
                        }
                    }
                    if (this.isEvaporationProcess()) {
                        if (this.answerList[i].id !== this.correctOrderIds.evaporation[i]) {
                            return false
                        }
                    }
                    if (this.isCondensationProcess()) {
                        if (this.answerList[i].id !== this.correctOrderIds.condensation[i]) {
                            return false
                        }
                    }
                }
                return true
            },
            onMoveElement() {
                this.error = ''
            },
            openModalCorrectAnswer() {
                this.info = `Foram gastos ${this.timer.seconds} segundos para completar essa etapa. Parabéns e continue avançando!`
                this.$modal.show("correct-answer");
                this.reloadTimer()
            },
            openModalInstructions() {
                this.info="Arraste os estados em uma sequência lógica para indicar a mudança correta de estado. Assim você estará mais perto de irrigar a colheita da cidade."
                this.$modal.show("instructions-alert");
            },
            openModalWrongAnswer() {
                this.error = 'Ops, a sequência indicada não está correta.Por favor não desista do desafio e continue tentando!'
                this.$modal.show("wrong-answer");
            },
            reloadTimer() {
                this.totalTime += this.timer.seconds
                this.timer = { seconds: 0 }
            },
            shufflePhysicalStates() {
                this.physicalStates = shuffle(this.physicalStates);
            },
            updateTimer() {
                this.timer.seconds += 1;
            }
        }
    }
</script>

<style lang="stylus">
    .center-text
        display flex
        flex-direction column
        align-items center

        .draggable-list__item
            margin-right  0 !important

    .center-button
        display flex
        flex-direction column
        align-items center
        justify-content center

</style>
