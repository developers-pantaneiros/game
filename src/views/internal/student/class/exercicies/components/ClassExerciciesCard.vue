<template>
    <div @click="goToExerciciePage" class="nes-container is-rounded exercicie-card">
        <div class="exercicie-card__primary">
            <h3 class="exercicie-card__primary--title">#{{exercicie.index}}</h3>
        </div>
        <div class="exercicie-card__secondary">
            <p class="exercicie-card__secondary--subtitle">{{limitCharacters(exercicie.name)}}</p>
            <div>
                <span class="exercicie-card__secondary--description">Pontuação:</span>
                <div class="exercicie-card__secondary--stars">
                    <i class="nes-icon is-small star"></i>
                    <i class="nes-icon is-small star"></i>
                    <i class="nes-icon is-small star"></i>
                    <i class="nes-icon is-small star"></i>
                    <i class="nes-icon is-small star"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "class-exercicies-card",
    props: {
        exercicie: {
            type: Object,
            required: true
        }
    },
    methods: {
        limitCharacters(string) {
            if (string && string.length > 40) return string.substring(0, 40) + "...";
            else return string
        },
        goToExerciciePage() {
            console.log("Vamos resolver um exercício!");
        }
    }
}
</script>
