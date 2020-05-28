<template>
    <div class="container container__full">
        <div class="margin-bottom-1">
            <div style="margin-bottom: 15px" class="center-text">
                <h2 class="title">Feedback Desafio #1</h2>
            </div>
            <div v-if="!lastMessage">
                <section  style="margin-left: 20px"  class="message-list">
                    <section class="message -left">
                        <div class="nes-balloon from-left center-text">
                            <p class="title">{{messages[counter]}}</p>
                        </div>
                    </section>
                </section>
                <i class="nes-octocat animate"></i>
                <div style="margin-top: 15px" class="center-button">
                    <button  class="nes-btn full-width-button is-success margin-bottom-2" @click="nextMessage">Próximo</button>
                </div>
            </div>
            <div v-if="lastMessage" style="margin-top: 15px">
                <button v-if="isStudentRouter()" class="nes-btn full-width-button is-primary margin-bottom-2" @click="goToScore">Ver desempenho pessoal</button>
                <button v-if="isStudentRouter()" class="nes-btn full-width-button is-warning margin-bottom-2" @click="goToRanking">Ver ranking da turma</button>
                <button class="nes-btn full-width-button feedback-btn margin-bottom-2" @click="goToForm">Avaliar o aplicativo</button>
                <button class="nes-btn full-width-button" @click="backToChallenges">Voltar aos Desafios</button>
            </div>
        </div>
        <alert id="completed-challenge" title="Desafio completo!" :message="info" :octocat="true" confirmMessage="Confirmar" />
    </div>
</template>

<script>
    import Alert from "@/commons/components/Alert";

    export default {
        name: "feedback",
        components: { Alert },
        data() {
            return {
                info: '',
                classroomId: null,
                counter: 0,
                lastMessage: false,
                messages: [
                    "Nesse desafio você aprendeu a analisar e representar as transformações e " +
                    "conservações em sistemas que envolvam quantidade de matéria, de energia " +
                    "e de movimento.",
                    "Com isso, você agora é capaz de realizar previsões em situações cotidianas e " +
                    "processos produtivos que priorizem o uso racional dos recursos naturais.",
                    "Além disso, você também aprendeu proteger e restaurar ecossistemas relacionados com a água, como " +
                    "a colheita da cidade.",
                    "Assim, você alcançou uma meta do ODS #6 - Assegurar a disponibilidade e gestão " +
                    "sustentável da água e saneamento para todos.\n Parabéns!"
                ],
                URL_FORM_TEACHER: "https://forms.gle/UzDifdwbxp9E49Fu5",
                URL_FORM_STUDENT: "https://forms.gle/gpVTmPUNLWUof8fA9",
                userId: null
            }
        },
        mounted() {
            this.openModalCompletedChallenge();
        },
        methods: {
            backToChallenges() {
                let router = ""
                if (this.isStudentRouter()) {
                    this.$router.push({
                        name: "studentExercises",
                        params: {
                            studentId: this.$store.state.user.uid,
                            classroomId: this.$store.state.class.uid
                        }
                    });
                } else if (this.isTeacherRouter()) {
                    this.$router.push({
                        name: "teacherExercises",
                        params: {
                            teacherId: this.$store.state.user.uid,
                            classroomId: this.$store.state.class.uid
                        }
                    });
                }
            },
            goToForm() {
                if(this.isStudentRouter()) {
                    window.open(this.URL_FORM_STUDENT)
                } else if (this.isTeacherRouter()) {
                    window.open(this.URL_FORM_TEACHER)
                } else {
                    window.open("")
                }
            },
            goToRanking() {
                this.$router.push({
                    name: "studentRanking",
                    params: {
                        studentId: this.$store.state.user.uid,
                        classroomId: this.$store.state.class.uid
                    }});
            },
            goToScore() {
                this.$router.push({
                    name: "studentScore",
                    params: {
                        studentId: this.$store.state.user.uid,
                        classroomId: this.$store.state.class.uid
                    }});
            },
            isStudentRouter() {
                return this.$store.state.user.role === "student"
            },
            isTeacherRouter() {
                return this.$store.state.user.role === "teacher"
            },
            nextMessage(){
                if (this.counter < 3) {
                    this.counter += 1
                } else {
                    this.lastMessage = true
                    this.$modal.show("feedback-form");
                }
            },
            openModalCompletedChallenge() {
                this.info = 'Parabéns você completou o primeiro desafio!'
                this.$modal.show("completed-challenge");
            }
        }
    }

</script>