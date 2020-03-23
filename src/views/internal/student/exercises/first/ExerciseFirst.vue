<template>
    <div id="exercise-first" class="container container__full">
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
                    <span class="is-primary">{{mudancasEstado[i]}}</span>
                </a>
                <p class="subtitle subtitle--small">Arraste os estados que julgar correto para esse espaço.</p>
            </div>
            <div>
                <draggable class="list-group" v-model="list2" group="people" :move="onMoveElement">
                    <transition-group class="draggable-list" :style="getPaddingForEmptyList(list2)">
                        <div class="draggable-list__item" v-for="element in list2" :key="element.id">
                            <img class="draggable-list__item--photo" :src="element.photo" :alt="element.value" v-if="element.photo">
                            <p class="draggable-list__item--text">{{ element.value }}</p>
                        </div>
                    </transition-group>
                </draggable>
            </div>
            <transition name="fade">
                <p class="paragraph paragraph--small paragraph--error margin-top-1" v-show="error">{{error}}</p>
            </transition>
            <br>
            <div class="center-button">
                <button slot="footer" class="nes-btn is-success full-width" @click="checkPhysicalStatesOrder">{{messageButton}}</button>
                <button slot="footer" class="nes-btn is-warning margin-top-1 full-width" @click="limpar">Reiniciar</button>
                <button type="button" class="nes-btn is-error margin-top-1 full-width" @click="close">Fechar Desafio</button>
                <audio-button style="margin-top: 15px" :tagId="'exercise-first'" />
            </div>
        </div>
        <alert id="instructions-alert" title="Instruções" :message="error" :info="info" confirmMessage="Confirmar" @teste="fecharModal" />
    </div>
</template>

<script>
    import draggable from "vuedraggable";
    import shuffle from "@/globals/utils/shuffle";
    import AudioButton from "@/commons/components/AudioButton";
    import Alert from "@/commons/components/Alert";

    import ice from "@/assets/images/ice.png"
    import water from "@/assets/images/water.png"
    import rain from "@/assets/images/rain.png"

    export default {
        name: "exercise-first",
        components: { AudioButton, Alert, draggable },
        data() {
            return {
                timer: {
                    seconds: 0
                },
                error: '',
                info: '',
                list2: [],
                physicalStates: [],
                correctOrderIds: {
                    fusao: [0, 1],
                    evaporacao: [1, 2],
                    condensacao: [2, 3]
                },
                mudancasEstado: ['Fusão', 'Evaporação', 'Condensação'],
                i: 0,
                messageButton: 'Próximo'
            }
        },
        mounted() {
            this.showModal();
        },
        created() {
            this.createPhysicalStates();
            this.shufflePhysicalStates();
            this.initTimer();
        },
        methods: {
            getPaddingForEmptyList(list) {
                if (this.isListEmpty(list)) {
                    return 'padding: 4rem;'
                }
            },
            isListEmpty(list) {
                return list.length === 0;
            },
            shufflePhysicalStates() {
                this.physicalStates = shuffle(this.physicalStates);
            },
            initTimer() {
                this.interval = setInterval(() => { this.updateTimer() }, 1000);
            },
            updateTimer() {
                this.timer.seconds += 1;
            },
            onMoveElement() {
                this.error = ''
            },
            checkPhysicalStatesOrder() {
                if (this.isPysicalStatesInCorrectOrder()) {
                    console.log('Ordem correta!');
                    console.log(`Tempo: ${this.timer.seconds} segundos.`)
                    this.destroyInterval()
                } else {
                    this.error = 'Ops, ainda restam elementos embaralhados. Por favor, tente novamente.'
                }
            },
            isPysicalStatesInCorrectOrder() {
                for (let i = 0; i < this.list2.length; i++) {
                    if (this.list2[i].id !== this.correctOrderIds[i]) {
                        return false
                    }
                }
                return true
            },
            destroyInterval() {
                clearInterval(this.interval)
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
            fecharModal() {
                this.info = ''
            },
            close() {
                this.$router.push({ name: "studentExercises", params: {uid: this.$store.state.class.uid}});
            },
            limpar() {
                console.log(this.physicalStates)
                console.log(this.list2)
                this.list2 = []
                this.createPhysicalStates()
                this.shufflePhysicalStates()
                this.initTimer()
            },
            showModal() {
                this.info="Arraste os estados em uma sequência lógica para indicar a mudança correta de estado. Assim você estará mais perto de irrigar a colheita da cidade."
                document.getElementById("instructions-alert").showModal();
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
