<template>
    <div>
        <div id="feedback">
            <a type="button" class="nes-btn" @click="openModalForm">
                <span>Feedback</span>
            </a>
        </div>
        <feedback-alert id="feedback-form" title="Avaliação do APP" :is-feedback="true" :message="info" confirmMessage="Avaliar" />
    </div>
</template>

<script>
    import FeedbackAlert from "./FeedbackAlert";

    export default {
        name: "FeebbackButton",
        components: { FeedbackAlert },
        data() {
            return {
                info: 'Para avaliar o APP clique no botão abaixo'
            }
        },
        methods: {
            openModalForm() {
                this.$modal.show("feedback-form");
            }
        }
    }
</script>

<style lang="stylus">
    #feedback
        float left
        position fixed
        top 80%
        right -45px

        a
            color #fff
            font-size 10px
            background-color #FF4500
            border-radius 5px
            display block
            padding 0 5px
            transform rotate(-90deg)
            margin-top: 10px

        a:after
            box-shadow inset -4px -4px #cf3800

</style>