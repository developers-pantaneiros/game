<template>
    <class-wrapper>
        <div class="margin-bottom-2 center-text">
            <a href="#" class="nes-badge center-box margin-bottom-1">
                <span class="is-warning">Pontuação</span>
            </a>
            <div style="margin-top: 10px" class="nes-container with-title">
                <p class="title">Desafio #1</p>
                <p>Mudanças de estado físico da matéria</p>
                <p>Pontuação: {{getPoints}}</p>
                <p>Tempo total: {{getTime}}</p>
                <progress class="nes-progress is-success" value="50" max="100"></progress>
            </div>
        </div>
    </class-wrapper>
</template>

<script>
import ClassWrapper from "../commons/ClassWrapper";

export default {
    name: "class-ranking",
    components: { ClassWrapper },
    data() {
        return {
            isLoading: true
        }
    },
    computed: {
        getPoints() {
            return this.$store.state.user.score.first.points
        },
        getTime() {
            return this.$store.state.user.score.first.time
        }
    }
}
</script>

