<template>
    <div class="container container__full">
        <div class="margin-bottom-2 center-text">
            <h2 class="title">Desafio #1 - Mudança de estados físicos da matéria!</h2>
            <p id="list-exercises" class="subtitle">Aponte uma sequência de mudanças de estados físicos para que a água se torne líquida e possa irrigar a colheita da cidade.</p>
        </div>
        <div>
            <transition name="fade">
                <p class="paragraph paragraph--error margin-top-1 margin-bottom-1" v-show="error">{{error}}</p>
            </transition>
            <center><p>Estados da matéria</p></center>


            <draggable class="list-group" v-model="physicalStates" :move="onMoveElement">
                <transition-group class="draggable-list margin-top-2">
                    <div class="draggable-list__item" v-for="element in physicalStates" :key="element.id">
                        <img class="draggable-list__item--photo" :src="element.photo" :alt="element.value" v-if="element.photo">
                        <p class="draggable-list__item--text">{{ element.value }}</p>
                    </div>
                </transition-group>
            </draggable>
            <br>
            <center><p>Fusão</p></center>
            <draggable class="list-group" v-model="list2" :move="onMoveElement">
                <transition-group class="draggable-list margin-top-2">
                    <div class="draggable-list__item" v-for="element in list2" :key="element.id">
                        <img class="draggable-list__item--photo" :src="element.photo" :alt="element.value" v-if="element.photo">
                        <p class="draggable-list__item--text">{{ element.value }}</p>
                    </div>
                </transition-group>
                <center><button slot="footer" class="nes-btn is-success margin-top-2" @click="checkPhysicalStatesOrder">Finalizar</button></center>
            </draggable>


        </div>
    </div>
</template>

<script>
    import draggable from "vuedraggable";
    import shuffle from "@/globals/utils/shuffle";

    import ice from "@/assets/images/ice.png"
    import water from "@/assets/images/water.png"
    import rain from "@/assets/images/rain.png"

    export default {
        name: "exercise-first",
        components: { draggable },
        data() {
            return {
                timer: {
                    seconds: 0
                },
                error: '',
                list2: [],
                physicalStates: [
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
                ],
                correctOrderIds: [0, 1, 2, 3]
            }
        },
        created() {
            this.shufflePhysicalStates();
            this.initTimer();
        },
        methods: {
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
                for (let i = 0; i < this.physicalStates.length; i++) {
                    if (this.physicalStates[i].id !== this.correctOrderIds[i]) {
                        return false
                    }
                }
                return true
            },
            destroyInterval() {
                clearInterval(this.interval)
            }
        }
    }
</script>
