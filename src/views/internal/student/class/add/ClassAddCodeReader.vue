<template>
    <section class="container container__full">
        <button @click="goToAddClass" type="button" class="nes-btn full-width is-error cancel-button">
            Cancelar
        </button>
        <class-form-code-reader v-model="classContent" @add="add"/>
        <alert id="class-add" title="Erro" :message="error" confirmMessage="Confirmar" />
    </section>
</template>

<script>
    import AbstractClassAddVue from "./AbstractClassAdd.vue";
    import ClassFormCodeReader from "./components/ClassFormCodeReader";
    import Alert from "@/commons/components/Alert";

    import firebase from "firebase";
    import actionTypes from "@/commons/constants/action-types";
    import getMessageError from "@/globals/utils/getMessageError.js";

    export default {
        name: "class-add-code-reader",
        extends: AbstractClassAddVue,
        components: { ClassFormCodeReader, Alert },
        data() {
            return {
                classContent: {
                    code: ""
                },
                error: ""
            }
        },
        methods: {
            async add() {
                try {
                    const userReference = firebase.firestore().collection("users").doc(this.user.uid);
                    const classJoined = await this.$store.dispatch(actionTypes.JOIN_CLASS, {code: this.classContent.code, user: userReference});
                    this.goToClassRoom(classJoined);
                } catch (error) {
                    this.showError(error);
                    console.log(error);
                }
            },
            goToClassRoom(classJoined) {
                this.$router.push({
                    name: "studentClassRoom",
                    params: { uid: classJoined.uid }
                });
            },
            goToAddClass() {
                this.$router.push({ name: "studentClassAdd" });
            },
            showError(error) {
                const errorMessage = getMessageError(error);
                this.error = errorMessage;
                this.$modal.show("class-add");
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
