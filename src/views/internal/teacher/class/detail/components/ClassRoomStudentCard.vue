<template>
    <div>
        <div v-for="student in value" :key="student.uid" class="nes-container is-rounded student-card">
            <div class="nes-avatar is-rounded is-large class-card__avatar">
                <i class="nes-icon twitch is-large"></i>
            </div>
            <div class="name-student">
                <h4 class="class-card__title">{{student.name}}</h4>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ClassRoomStudentCard",
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
</style>