<template>
    <div @click="goToClassView" class="nes-container is-rounded class-card">
        <div class="nes-avatar is-rounded is-large class-card__avatar">
            <i class="nes-icon trophy is-large"></i>
        </div>
        <div>
            <h4 class="class-card__title">{{classValue.name}}</h4>
            <p class="class-card__subtitle">{{classValue.description}}</p>
            <span class="class-card__description">Estudantes: {{classValue.students.length}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "class-search-card",
    props: {
        classValue: {
            type: Object,
            required: true
        }
    },
    methods: {
        goToClassView() {
            this.$router.push({ name: "teacherClassView",  params: {classroomId: this.classValue.uid} })
        }
    }
}
</script>
