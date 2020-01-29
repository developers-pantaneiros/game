<template>
    <div class="loading">
        <i class="nes-octocat animate loading__icon"></i>
        <h4 class="loading__title">{{title}}</h4>
    </div>
</template>

<script>
export default {
    name: "loading",
    props: {
        title: {
            type: String,
            required: false,
            default: "Carregando..."
        }
    }
}
</script>
