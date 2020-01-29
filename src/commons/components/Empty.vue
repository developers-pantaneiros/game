<template>
    <div class="empty">
        <i class="nes-octocat animate empty__icon"></i>
        <h4 class="empty__title">{{title}}</h4>
        <p class="empty__subtitle">{{subtitle}}</p>
    </div>
</template>

<script>
export default {
    name: 'empty',
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        }
    }
}
</script>
