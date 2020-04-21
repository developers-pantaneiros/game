<template>
    <modal :name="id" width="80%" height="auto" classes="nes-container is-rounded alert">
        <i class="nes-icon close is-small right nes-pointer" @click="hideAlert"></i>
        <img v-if="physicalState.photo" :src="physicalState.photo" :value="physicalState.value" width="50px" height="50px">
        <form method="dialog">
            <h3 class="title">{{title}}</h3>
            <p class="subtitle margin-bottom-2">{{message}}</p>
            <menu class="dialog-menu">
                <span class="nes-btn" @click="hideAlert">{{confirmMessage}}</span>
            </menu>
        </form>
    </modal>
</template>

<script>
    export default {
        name: "state-alert",
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
            physicalState: {
                type: Object,
                required: false,
                default: function() { return {} }
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
            }
        }
    }
</script>

<style scoped>

</style>