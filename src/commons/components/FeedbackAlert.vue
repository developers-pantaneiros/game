<template>
    <modal :name="id" width="80%" height="auto" classes="nes-container is-rounded alert">
        <i class="nes-octocat animate"></i>
        <i class="nes-icon close is-small right nes-pointer" @click="hideAlert"></i>
        <form id="form-text" method="dialog">
            <h3 class="title">{{title}}</h3>
            <p class="subtitle margin-bottom-2">{{message}}</p>
            <menu class="dialog-menu">
                <button class="nes-btn feedback-btn" @click="goToForm">{{confirmMessage}}</button>
            </menu>
        </form>
    </modal>
</template>

<script>
    export default {
        name: 'feedback-alert',
        props: {
            confirmMessage: {
                type: String,
                required: true,
                default: ""
            },
            id: {
                type: String,
                required: true
            },
            message: {
                type: String,
                required: true,
                default: ""
            },
            title: {
                type: String,
                required: true,
                default: ""
            }
        },
        methods: {
            hideAlert() {
                this.$modal.hide(this.id);
            },
            goToForm() {
                window.location.replace("https://forms.gle/r5xEKVDkHdt1ui4a7")
                this.$modal.hide(this.id);
            }
        }
    }
</script>

<style lang="stylus">
    .feedback-btn
        background-color #7349bd !important
        color #fff !important

    .feedback-btn:after
        box-shadow inset -4px -4px #421e82 !important

</style>