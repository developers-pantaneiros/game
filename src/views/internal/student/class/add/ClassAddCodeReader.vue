<template>
    <section class="container container__full">
        <button @click="goToAddClass" type="button" class="nes-btn is-error cancel-button">
            Cancelar
        </button>
        <class-form-code-reader v-model="classContent" @addClass="addClass" />
        <alert id="class-add-alert" title="Erro" :message="error" confirmMessage="Confirmar" />
    </section>
</template>

<script>
    import AbstractClassAddVue from "./AbstractClassAdd.vue";
    import Alert from "@/commons/components/Alert";
    import ClassFormCodeReader from "./components/ClassFormCodeReader";

    import actionTypes from "@/commons/constants/action-types";
    import firebase from "firebase";

    export default {
        name: "class-add-code-reader",
        extends: AbstractClassAddVue,
        components: { Alert, ClassFormCodeReader },
        methods: {
            addClass() {
                this.add(this.classContent.code);
            },
            goToAddClass() {
                this.$router.push({ name: "studentClassAdd" });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        height: calc(100vh - 6rem) !important;
        border-radius: .6rem;
        overflow: hidden;
    }
    .cancel-button {
        z-index: 1;

        position: absolute;
        bottom: 4rem;
        left: 50%;
        width: 20rem;
        transform: translateX(-50%);
    }
</style>
