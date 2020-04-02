<template>
    <div>
        <div id="feedback">
            <a type="button" class="nes-btn" @click="openModalForm">
                <span>Feedback</span>
            </a>
        </div>
        <alert id="feedback-form" title="Avaliação do APP" :is-feedback="true" :message="info" :octocat="true" confirmMessage="Avaliar" />
    </div>
</template>

<script>
    import Alert from "./Alert";

    export default {
        name: "FeebbackButton",
        components: { Alert },
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

<style scoped>
    #feedback {
        float: left;
        position: fixed;
        top: 80%;
        right: -45px;
    }

    #feedback a {
        color: #fff;
        font-size: 10px;
        background: #FF4500;
        border-radius: 5px;
        display: block;
        padding: 0 5px;
        transform: rotate(-90deg);
        margin-top: 10px;
    }

</style>