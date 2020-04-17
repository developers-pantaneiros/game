<template>
    <div class="nes-container is-rounded teacher-card">
        <div class="nes-avatar is-rounded is-large class-card__avatar">
            <i class="nes-icon reddit is-large"></i>
        </div>
        <div>
            <h4 class="class-card__title">{{value.name}}</h4>
            <p class="class-card__subtitle">Professor</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "class-room-teacher-card",
        props: {
            value: {
                type: Object,
                required: true
            }
        }
    }
</script>
