<template>
    <section class="container">
        <div class="center-text">
            <h3 class="title">Redefinir senha</h3>
            <p id="reset-password-text" class="subtitle">
                Para redefinir sua senha, insira um endereço de e-mail válido e clique em "Redefinir". Caso deseje voltar, pressione a opção "Voltar".
            </p>
            <audio-button :tagId="'reset-password-text'" />
        </div>
        <reset-password-form-actions
                @resetPassword="resetPassword"
        />
        <alert id="reset-password-alert" :octocat="true" title="Erro" :message="info" confirmMessage="Confirmar" />
    </section>
</template>

<script>
    import actionTypes from "@/commons/constants/action-types";
    import Alert from "@/commons/components/Alert";
    import AudioButton from "@/commons/components/AudioButton";
    import ResetPasswordFormActions from "./components/ResetPasswordFormActions";

    export default {
        name: 'reset-password',
        components: {Alert, AudioButton, ResetPasswordFormActions},
        data() {
            return {
                info: ""
            };
        },
        methods: {
            async resetPassword(email) {
                try {
                    await this.$store.dispatch(actionTypes.RESET_PASSWORD, email);
                    this.openModalResetPasswordSucess()
                } catch (error) {
                    this.openModalResetPasswordError()
                    console.log(error);
                }

            },
            openModalResetPasswordSucess() {
                this.info = "E-mail enviado com sucesso."
                this.$modal.show("reset-password-alert");
            },
            openModalResetPasswordError() {
                this.info = "Não foi possível enviar o e-mail."
                this.$modal.show("reset-password-alert");
            },
        }
    }
</script>