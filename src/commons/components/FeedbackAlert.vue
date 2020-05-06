<template>
    <modal :name="id" width="80%" height="auto" classes="nes-container is-rounded alert">
        <i class="nes-octocat animate"></i>
        <i class="nes-icon close is-small right nes-pointer" @click="hideAlert"></i>
        <form id="form-text" method="dialog">
            <h3 class="title">{{title}}</h3>
            <p class="subtitle margin-bottom-2">{{message}}</p>
            <menu class="dialog-menu">
                <span class="nes-btn feedback-btn" @click="goToForm">{{confirmMessage}}</span>
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
        data() {
            return {
                URL_FORM_TEACHER: "https://forms.gle/UzDifdwbxp9E49Fu5",
                URL_FORM_STUDENT: "https://forms.gle/gpVTmPUNLWUof8fA9"
            }
        },
        methods: {
            hideAlert() {
                this.$modal.hide(this.id);
            },
            goToForm() {
                if(this.isStudent()) {
                    window.open(this.URL_FORM_STUDENT)
                } else if (this.isTeacher()) {
                    window.open(this.URL_FORM_TEACHER)
                } else {
                    window.open("")
                }
                this.$modal.hide(this.id);
            },
            isStudent() {
                return this.$store.state.user.role === "student"
            },
            isTeacher() {
                return this.$store.state.user.role === "teacher"
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