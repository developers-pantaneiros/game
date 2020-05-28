<template>
    <div>
        <div v-for="student in value" :key="student.uid" class="nes-container is-rounded student-card">
            <div class="exercise-card__primary">
                <h3 class="exercise-card__primary--title">#{{student.index}}</h3>
                <div class="nes-avatar is-rounded is-medium class-card__avatar">
                    <i class="nes-icon twitch is-medium"></i>
                </div>
            </div>
            <div class="exercise-card__secondary">
                <div class="name-student">
                    <h4 class="class-card__title">{{student.studentName}}</h4>
                    <a style="font-size: 12px; margin-bottom: 20px" class="nes-badge is-splited">
                        <span style="font-size: 15px" class="is-dark subtitle">Pontos</span>
                        <span style="font-size: 15px" class="is-warning subtitle">{{student.points}}</span>
                    </a>
                    <a style="font-size: 12px; margin-bottom: 20px" class="nes-badge is-splited">
                        <span style="font-size: 15px" class="is-dark subtitle">Tempo</span>
                        <span style="font-size: 15px" class="is-primary subtitle">{{student.time}} s</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "classroom-student-card-ranking",
        props: {
            value: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="stylus">
    .name-student
        display flex
        flex-direction column
        justify-content center

        .subtitle
            font-size 10px
</style>