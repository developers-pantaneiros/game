<template>
    <div class="container container__full">
        <div v-if="storyboard">
            <storyboard
                    @goToChallenge="this.initChallenge"
            />
        </div>
        <div v-else>
            <div id="exercise-one" class="margin-bottom-1 center-text">
                <h2 class="title title--small">Desafio #1 - Mudança de estados físicos da matéria!</h2>
            </div>
            <div>
                <div class="center-text">
                    <h3 class="title title--small">Estados da matéria</h3>
                    <p class="subtitle">Role para a direita para ver mais estados.</p>
                </div>
                <draggable class="list-group" v-model="physicalStates" group="people" :move="onMoveElement">
                    <transition-group class="draggable-list" :style="getPaddingForEmptyList(physicalStates)">
                        <div class="draggable-list__item" v-for="element in physicalStates" :key="element.id" @click="openModalPhysicalState(element)">
                            <img class="draggable-list__item--photo" :src="element.photo" :alt="element.value" v-if="element.photo">
                            <p class="draggable-list__item--text">{{ element.value }}</p>
                        </div>
                    </transition-group>
                </draggable>
                <br>
                <div class="center-text">
                    <h3 class="title title--small">Mudança de estado</h3>
                    <p class="subtitle">Arraste os estados na sequência lógica que dão origem a transformação física:</p>
                    <a class="nes-badge" style="margin-bottom: 25px">
                        <span style="font-size: 20px" class="is-primary">{{stateChanges[counter]}}</span>
                    </a>
                </div>
                <div class="group-answer-list">
                    <draggable class="list-group list-awnswer" v-model="answerOne" group="people" :move="onMoveElement">
                        <transition-group class="draggable-list" :style="getPaddingForEmptyList(answerOne)">
                            <div class="draggable-list__item" v-for="element in answerOne" :key="element.id" @click="openModalPhysicalState(element)">
                                <img class="draggable-list__item--photo" :src="element.photo" :alt="element.value" v-if="element.photo">
                                <p class="draggable-list__item--text">{{ element.value }}</p>
                            </div>
                        </transition-group>
                        <h5 class="subtitle text-state center-text">Estado inicial</h5>
                    </draggable>
                    <div class="former-arrow">
                        <h5 style="margin-bottom: 35%">==></h5>
                    </div>
                    <draggable class="list-group list-awnswer" v-model="answerTwo" group="people" :move="onMoveElement">
                        <transition-group class="draggable-list" :style="getPaddingForEmptyList(answerTwo)">
                            <div class="draggable-list__item" v-for="element in answerTwo" :key="element.id" @click="openModalPhysicalState(element)">
                                <img class="draggable-list__item--photo" :src="element.photo" :alt="element.value" v-if="element.photo">
                                <p class="draggable-list__item--text">{{ element.value }}</p>
                            </div>
                        </transition-group>
                        <h5 class="subtitle text-state center-text">Estado final</h5>
                    </draggable>
                </div>
                <br>
                <div class="center-button">
                    <button slot="footer" class="nes-btn is-success full-width-button" @click="checkPhysicalStatesOrder">{{messageButton}}</button>
                    <button slot="footer" class="nes-btn is-warning margin-top-1 full-width-button" @click="clear">Reiniciar</button>
                    <button type="button" class="nes-btn is-error margin-top-1 full-width-button" @click="close">Fechar Desafio</button>
                </div>
            </div>
            <alert id="instructions-alert" title="Instruções" :message="info" :octocat="true" confirmMessage="Confirmar" />
            <alert id="correct-answer" title="Resposta correta!" :message="info" :octocat="true" confirmMessage="Confirmar" />
            <alert id="wrong-answer" title="Resposta errada!" :message="error" :octocat="true" confirmMessage="Confirmar" />
            <state-alert id="physical-state" :title="stateName" :message="stateDescription" :physicalState="physicalState" confirmMessage="Confirmar" />
        </div>
    </div>
</template>

<script>
    import actionTypes from "@/commons/constants/action-types";
    import draggable from "vuedraggable";
    import shuffle from "@/globals/utils/shuffle";
    import Alert from "@/commons/components/Alert";
    import StateAlert from "@/commons/components/StateAlert";
    import Storyboard from "./components/Storyboard";

    import ice from "@/assets/images/ice.png"
    import water from "@/assets/images/water.png"
    import rain from "@/assets/images/rain.png"
    import firebase from "firebase";

    export default {
        name: "exercise-first",
        components: { Alert, draggable, StateAlert, Storyboard },
        data() {
            return {
                answerOne: [],
                answerTwo: [],
                correctOrderIds: {
                    fusion: [0, 1],
                    evaporation: [1, 2],
                    condensation: [2, 1]
                },
                counter: 0,
                counterErrors: 0,
                classroomId: null,
                timer: {
                    seconds: 0
                },
                totalTime: 0,
                error: '',
                info: '',
                messageButton: 'Próximo',
                physicalState: {},
                physicalStates: [],
                score: {
                    points: 0,
                    time: 0
                },
                scoreChallengeFirst: {
                    points: 0,
                    time: 0
                },
                stateChanges: ['Fusão', 'Evaporação', 'Condensação'],
                stateName: '',
                stateDescription: '',
                storyboard: true,
                userId: null,
            }
        },
        created() {
            this.getUidFromUrl();
            this.createPhysicalStates();
            this.shufflePhysicalStates();
            this.initTimer();
        },
        mounted() {
            this.openModalInstructions();
        },
        methods: {
            async calculateScore() {
                if (this.counterErrors === 0) {
                    this.scoreChallengeFirst.points = 9
                    this.score.points += 9
                } else if (this.counterErrors <  2) {
                    this.scoreChallengeFirst.points = 8
                    this.score.points += 8
                } else if (this.counterErrors <  3) {
                    this.scoreChallengeFirst.points = 7
                    this.score.points += 7
                } else if (this.counterErrors <  4) {
                    this.scoreChallengeFirst.points = 6
                    this.score.points += 6
                } else if (this.counterErrors <  5) {
                    this.scoreChallengeFirst.points = 5
                    this.score.points += 5
                } else {
                    this.scoreChallengeFirst.points = 3
                    this.score.points += 3
                }
                if (this.isStudentRouter()) {
                    await this.updateClassChallenge()
                    await this.updateScoreUser()
                }
            },
            calculateTime() {
                this.scoreChallengeFirst.time = this.totalTime
                this.score.time += this.totalTime
            },
            checkPhysicalStatesOrder() {
                if (this.isAnswerCorrect() && !this.isAnswerEmpty()) {
                    if (this.isLastChallenge()) {
                        this.reloadTimer()
                        this.calculateTime()
                        this.calculateScore()
                        this.goToFeedback()
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
                    this.clear()
                }
            },
            clear() {
                this.answerOne = []
                this.answerTwo = []
                this.createPhysicalStates()
                this.shufflePhysicalStates()
                this.initTimer()
            },
            close() {
                if(this.isStudentRouter()) {
                    this.$router.push({
                        name: "studentExercises",
                        params: {
                            studentId: this.userId,
                            classroomId: this.classroomId,
                        }
                    });
                } else if (this.isTeacherRouter()) {
                    this.$router.push({
                        name: "teacherExercises",
                        params: {
                            teacherId: this.userId,
                            classroomId: this.classroomId,
                        }
                    });
                }
            },
            createPhysicalStates() {
                this.physicalStates = [
                    {
                        id: 0,
                        photo: ice,
                        value: 'Sólido',
                        description: 'Nesse estado físico da matéria, as moléculas se encontram muito próximas, sendo assim possuem forma fixa, volume fixo e não sofrem compressão. Um exemplo é um cubo de gelo,'
                    },
                    {
                        id: 1,
                        photo: water,
                        value: 'Líquido',
                        description: 'Aqui as moléculas estão mais afastadas do que no estado sólido e as forças de repulsão são um pouco maiores. Os elementos que se encontram nesse estado, possuem forma variada, mas volume constante.'
                    },
                    {
                        id: 2,
                        photo: rain,
                        value: 'Gasoso',
                        description: 'A movimentação das moléculas nesse estado é bem maior que no estado líquido ou sólido. Se variarmos a pressão exercida sobre um gás podemos aumentar ou diminuir o volume dele, sendo assim, pode-se dizer que sofre compressão e expansão facilmente.'
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
                const studentRouter = this.$route.params.studentId;
                const teacherRouter = this.$route.params.teacherId;
                if (studentRouter) {
                    this.userId = this.$route.params.studentId;
                } else if (teacherRouter) {
                    this.userId = this.$route.params.teacherId;
                }
                this.classroomId = this.$route.params.classroomId
            },
            goToFeedback() {
                let router = ""
                if(this.isStudentRouter()) {
                    router = "studentFeedbackExerciseFirst"
                } else if (this.isTeacherRouter()) {
                    router = "teacherFeedbackExerciseFirst"
                }
                this.$router.push({
                    name: router,
                    params: {
                        userId: this.userId,
                        classroomId: this.classroomId
                    }});
            },
            incrementCounter() {
                if (this.counter < 2) {
                    this.counter = this.counter + 1
                }
            },
            initChallenge() {
                this.storyboard = false
            },
            initTimer() {
                this.interval = setInterval(() => { this.updateTimer() }, 1000);
            },
            isAnswerCorrect () {
                return this.isPhysicalStatesCorrectListOne() && this.isPhysicalStatesCorrectListTwo()
            },
            isAnswerEmpty () {
                return this.answerOne.length === 0 && this.answerTwo.length === 0
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
                return list.length === 0
            },
            isPhysicalStatesCorrectListOne() {
                if(this.answerOne.length === 1) {
                    if (this.isFusionProcess()) {
                        if (this.answerOne[0].id !== this.correctOrderIds.fusion[0]) {
                            return false
                        }
                    }
                    if (this.isEvaporationProcess()) {
                        if (this.answerOne[0].id !== this.correctOrderIds.evaporation[0]) {
                            return false
                        }
                    }
                    if (this.isCondensationProcess()) {
                        if (this.answerOne[0].id !== this.correctOrderIds.condensation[0]) {
                            return false
                        }
                    }
                }
                return true
            },
            isPhysicalStatesCorrectListTwo() {
                if(this.answerTwo.length === 1) {
                    if (this.isFusionProcess()) {
                        if (this.answerTwo[0].id !== this.correctOrderIds.fusion[1]) {
                            return false
                        }
                    }
                    if (this.isEvaporationProcess()) {
                        if (this.answerTwo[0].id !== this.correctOrderIds.evaporation[1]) {
                            return false
                        }
                    }
                    if (this.isCondensationProcess()) {
                        if (this.answerTwo[0].id !== this.correctOrderIds.condensation[1]) {
                            return false
                        }
                    }
                }
                return true
            },
            isStudentRouter() {
                return this.$store.state.user.role === "student"
            },
            isTeacherRouter() {
                return this.$store.state.user.role === "teacher"
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
                this.info="Arraste os estados em uma sequência lógica para indicar a mudança correta de estado. Dessa forma, você estará mais perto de irrigar a colheita da cidade."
                this.$modal.show("instructions-alert");
            },
            openModalPhysicalState(element) {
                this.physicalState = element
                this.stateName = element.value
                this.stateDescription = element.description
                this.$modal.show("physical-state");
            },
            openModalWrongAnswer() {
                this.error = 'Ops, a sequência indicada não está correta. Por favor não desista do desafio e continue tentando!'
                this.$modal.show("wrong-answer");
            },
            reloadTimer() {
                this.totalTime += this.timer.seconds
                this.timer = { seconds: 0 }
            },
            shufflePhysicalStates() {
                this.physicalStates = shuffle(this.physicalStates);
            },
            async updateClassChallenge() {
                await this.$store.dispatch(actionTypes.UPDATE_CLASS_CHALLENGE, {
                    classroomId: this.$store.state.class.uid,
                    challengeId: this.$store.state.challenge.uid,
                    userId: this.userId,
                    performance: {
                        studentUid: firebase.firestore().collection("users").doc(this.userId),
                        score: this.scoreChallengeFirst
                    }
                });
            },
            async updateScoreUser() {
                await this.$store.dispatch(actionTypes.UPDATE_SCORE_USER, {
                    userId: this.userId,
                    classroomId: this.classroomId,
                    score: this.score
                });
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

    .group-answer-list
        display flex
        flex-direction row

        .former-arrow
            padding-left 6px
            width 20%
            display flex
            justify-content center
            align-items center

        .list-awnswer
            width 40% !important

            .draggable-list__item
                margin  0 !important

            .text-state
                margin-top 5px
                margin-bottom 0

    .center-button
        display flex
        flex-direction column
        align-items center
        justify-content center

</style>
