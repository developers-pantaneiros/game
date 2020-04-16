<template>
    <div class="margin-bottom-1">
        <div style="margin-bottom: 15px" class="center-text">
            <h2 class="title">Introdução</h2>
        </div>
        <section  style="margin-left: 20px"  class="message-list">
            <section class="message -left">
                <!-- Balloon -->
                <div class="nes-balloon from-left center-text">
                    <p style="font-size: 14px">{{messages[counter]}}</p>
                </div>
            </section>
        </section>
        <i class="nes-octocat animate"></i>
        <div v-if="this.counter < 4" class="center-button margin-top-2">
            <button  class="nes-btn full-width-button is-success" @click="nextMessage">Próximo</button>
        </div>
        <button class="nes-btn full-width-button margin-top-2" @click="goToChallenge">Ir para o desafio</button>
    </div>
</template>

<script>
    export default {
        name: "Storyboard",
        data() {
            return {
                counter: 0,
                lastMessage: false,
                messages: [
                    "Olá, meu nome é Loki e vou guiar você por nossa aventura!",
                    "A colheita de nossa cidade está enfrentando problemas com uma seca...",
                    "Perto dela existe uma reserva de água, porém ela está congelada.",
                    "Precisamos da sua ajuda para solucionar o desafio com a água e irrigar a colheita.",
                    "Vamos começar?"
                ]
            }
        },
        methods: {
            goToChallenge() {
                this.$emit('goToChallenge')
            },
            nextMessage(){
                if (this.counter < 4) {
                    this.counter += 1
                } else {
                    this.lastMessage = true
                }
            }
        }
    }
</script>

<style scoped>

</style>