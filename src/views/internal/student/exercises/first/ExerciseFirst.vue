<template>
    <div class="container container__full">
        <h1>Primeiro exercício!</h1>
        <draggable v-model="myArray">
            <transition-group>
                <div v-for="element in myArray" :key="element.id">
                    {{element.name}}
                </div>
            </transition-group>
        </draggable>
    </div>
</template>

<script>
    import draggable from "vuedraggable";

    export default {
        name: "exercise-first",
        components: { draggable },
        data() {
            return {
                myArray: [
                    {
                        id: 1,
                        name: 'Carlos Eduardo'
                    },
                    {
                        id: 2,
                        name: 'Carlos Henrique'
                    },
                    {
                        id: 3,
                        name: 'Nathália'
                    },
                    {
                        id: 4,
                        name: 'Yasmin'
                    },
                    {
                        id: 5,
                        name: 'Fábio'
                    }
                ]
            }
        }
    }
</script>
