<template>
    <div class="nes-field">
        <p style="margin-bottom: 20px"></p>
        <label for="email_input">E-mail</label>
        <input v-model="email" type="email" id="email_input" class="nes-input form-input" required />
        <p style="margin-top: 20px"></p>
        <button type="submit" class="nes-btn is-success full-width margin-bottom-1" @click="resetPassword">Redefinir</button>
        <router-link to="/signin" class="nes-btn full-width">Voltar</router-link>
    </div>
</template>

<script>
    export default {
        name: 'reset-password-form-actions',
        data() {
            return {
                email: ''
            }
        },
        methods: {
            resetPassword() {
                this.$emit('resetPassword', this.email)
            }
        }
    };
</script>