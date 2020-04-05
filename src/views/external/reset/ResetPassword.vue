<template>
    <section class="container">
        <div class="center-text">
            <h3 class="title">Redefinir senha</h3>
            <p class="subtitle">
                Para redefinir sua senha, insira um endereço de e-mail válido e clique em "Redefinir". Caso deseje voltar, pressione a opção "Voltar".
            </p>
        </div>
        <reset-password-form-actions
                @resetPassword="resetPassword"
        />
        <alert id="reset-password-alert" :octocat="true" :title="info.title" :message="info.message" confirmMessage="Confirmar" />
    </section>
</template>

<script>
    import actionTypes from "@/commons/constants/action-types";
    import Alert from "@/commons/components/Alert";
    import ResetPasswordFormActions from "./components/ResetPasswordFormActions";
    import getMessageError from "@/globals/utils/getMessageError.js";

    export default {
        name: 'reset-password',
        components: {Alert, ResetPasswordFormActions},
        data() {
            return {
                info: {
                    title: "",
                    message: ""
                }
            };
        },
        methods: {
            async resetPassword(email) {
                try {
                    await this.$store.dispatch(actionTypes.RESET_PASSWORD, email);
                    this.openModalResetPasswordSucess()
                } catch (error) {
                    this.openModalResetPasswordError(error)
                    console.log(error);
                }

            },
            openModalResetPasswordSucess() {
                this.info = {
                    title: "Sucesso",
                    message: "E-mail enviado com sucesso."
                }
                this.$modal.show("reset-password-alert");
            },
            openModalResetPasswordError(error) {
                const errorMessage = getMessageError(error);
                this.info = {
                    title: "Erro",
                    message: errorMessage
                }
                this.$modal.show("reset-password-alert");
            },
        }
    }
</script>