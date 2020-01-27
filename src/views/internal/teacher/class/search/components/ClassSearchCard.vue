<template>
    <div class="nes-container is-rounded class-card">
        <div class="nes-avatar is-rounded is-large class-card__avatar">
            <i class="nes-icon trophy is-large"></i>
        </div>
        <div>
            <h4 class="class-card__title">{{value.name}}</h4>
            <p class="class-card__subtitle">{{value.description}}</p>
            <span class="class-card__description">Estudantes: {{value.students.length}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "class-search-card",
    props: {
        value: {
            type: Object,
            required: true
        }
    }
}
</script>
