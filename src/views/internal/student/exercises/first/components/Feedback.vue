<template>
    <div id="feedback" class="container container__full">
        <div class="margin-bottom-1">
            <div style="margin-bottom: 15px" class="center-text">
                <h2 class="title">Feedback Desafio #1</h2>
            </div>
                <section style="margin-left: 20px"  class="message-list">
                    <section class="message -left">
                        <!-- Balloon -->
                        <div class="nes-balloon from-left">
                            <p style="font-size: 14px">Nesse desafio você aprendeu a analisar e representar as transformações e conservações em sistemas que envolvam quantidade de matéria, de energia e de movimento para realizar previsões em situações cotidianas e processos produtivos que priorizem o uso racional dos recursos naturais.</p>
                        </div>

                    </section>
                </section>
            <i class="nes-octocat animate"></i>
            <div style="margin-top: 15px" class="center-button">
                <audio-button style="margin-bottom: 50px" :tagId="'feedback'" />
                <button class="nes-btn full-width" @click="backToChallenges">Mais Desafios</button>
            </div>
        </div>
        <alert id="completed-challenge" title="Desafio completo!" :message="info" :octocat="true" confirmMessage="Confirmar" />
    </div>
</template>

<script>
    import Alert from "@/commons/components/Alert";
    import AudioButton from "@/commons/components/AudioButton";

    export default {
        name: "feedback",
        components: { Alert, AudioButton },
        data() {
            return {
                info: ''
            }
        },
        mounted() {
            this.openModalCompletedChallenge();
        },
        methods: {
            backToChallenges() {
                this.$router.push({ name: "studentExercises", params: {uid: this.$store.state.class.uid}});
            },
            openModalCompletedChallenge() {
                this.info = 'Parabéns você completou o primeiro desafio!'
                this.$modal.show("completed-challenge");
            }
        }
    }

</script>