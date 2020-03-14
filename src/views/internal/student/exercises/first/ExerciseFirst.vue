<template>
    <div class="container container__full">
        <div class="margin-bottom-2 center-text">
            <h2 class="title">Desafio #1 - Mudança de estados físicos da matéria!</h2>
            <p id="list-exercises" class="subtitle">Aponte uma sequência de mudanças de estados físicos para que a água se torne líquida e possa irrigar a colheita da cidade.</p>
            <audio-button :tagId="'list-exercises'" />
        </div>
        <div>
            <draggable v-model="physicalStates">
                <transition-group class="draggable-list">
                    <div class="draggable-list__item" v-for="element in physicalStates" :key="element.id">
                        <img class="draggable-list__item--photo" :src="element.photo" :alt="element.value" v-if="element.photo">
                        <p class="draggable-list__item--text">{{ element.value }}</p>
                    </div>
                </transition-group>
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
                physicalStates: [
                    {
                        id: 0,
                        photo: ice,
                        value: 'Sólido'
                    },
                    {
                        id: 1,
                        photo: '',
                        value: 'Fusão'
                    },
                    {
                        id: 2,
                        photo: water,
                        value: 'Líquido'
                    },
                    {
                        id: 3,
                        photo: '',
                        value: 'Evaporação'
                    },
                    {
                        id: 4,
                        photo: rain,
                        value: 'Gasoso'
                    },
                    {
                        id: 5,
                        photo: '',
                        value: 'Condensação'
                    },
                    {
                        id: 6,
                        photo: rain,
                        value: 'Líquido'
                    }
                ]
            }
        },
        created() {
            this.physicalStates = shuffle(this.physicalStates)
        }
    }
</script>
