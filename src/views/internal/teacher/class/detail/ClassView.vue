<template>
    <div class="container">
        <div class="center-text" v-if="canIShowClass">
            <div class="center-text">
                <a href="#" class="nes-badge center-box margin-bottom-2">
                    <span class="is-dark">{{classFound.name}}</span>
                </a>
                <p class="subtitle">{{classFound.description}}</p>
                <p class="subtitle">Número de estudantes: {{classFound.students.length}}</p>
                <p class="subtitle">Criado em: {{getFormattedDate(classFound.createdAt)}} às {{getFormattedTime(classFound.createdAt)}}</p>
                <hr class="line-separator">
                <p style="margin-bottom: 0" class="subtitle">Convide os seus alunos para ingressarem na turma lendo o QR Code abaixo ou inserindo o código:</p>
            </div>
            <img class="qr-code-width" alt="QR Code" v-bind:src="qrCodeUrl"/>
            <div class="nes-badge center-box">
                <span class="is-warning">{{classFound.uid}}</span>
            </div>
            <button
                    style="margin: 20px 0"
                    type="button"
                    class="nes-btn is-success"
                    v-clipboard:copy="classFound.uid"
                    v-clipboard:success="onCopy"
                    v-clipboard:error="onError"
            ><font-awesome-icon size="lg" :icon="icons.faCopy" /> Copiar Código</button>
            <button type="button" class="nes-btn full-width" @click="backToClasses">Voltar</button>
            <alert
                    :octocat="true"
                    id="copy-button"
                    :title="this.message"
                    message=""
                    confirmMessage="Confirmar"
            />
        </div>
        <div v-else>
            <loading/>
        </div>
    </div>
</template>

<script>
    import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
    import {faCopy} from "@fortawesome/free-solid-svg-icons";
    import Alert from  "@/commons/components/Alert";
    import actionTypes from "@/commons/constants/action-types";
    import Loading from "@/commons/components/Loading";
    import QRCode from "qrcode";

export default {
    name: "class-view",
    components: { Alert, FontAwesomeIcon, Loading },
    data() {
        return {
            classroomId: "",
            classFound: {},
            message: '',
            qrCodeUrl: "",
            icons: {
                faCopy
            },
            isLoading: true
        };
    },
    created() {
        this.getClassroomIdFromUrl();
    },
    computed: {
        canIShowClass: function () {
            return !this.isLoading;
        }
    },
    methods: {
        async afterLoading() {
            await this.setQrCode(this.classFound.uid);
            this.isLoading = status;
        },
        backToClasses() {
            this.$router.push({ name: "teacherClass"});
        },
        async findClass() {
            try {
                const classFound = await this.$store.dispatch(actionTypes.FIND_CLASS, this.classroomId);
                this.setClassFound(classFound);
                await this.afterLoading();
            } catch (error) {
                console.log(error);
            }
        },
        getClassroomIdFromUrl() {
            this.classroomId = this.$route.params.classroomId;
            this.findClass()
        },
        getFormattedDate(timestamp) {
            return new Date(timestamp.seconds * 1000).toLocaleDateString("pt-BR")
        },
        getFormattedTime(timestamp) {
            return new Date(timestamp.seconds * 1000).toLocaleTimeString("pt-BR")
        },
        onCopy() {
            this.message="Código copiado com sucesso!"
            this.$modal.show("copy-button");
        },
        onError() {
            this.message="Erro ao copiar código!"
            this.$modal.show("copy-button");
        },
        setClassFound(classFound) {
            this.classFound = classFound;
        },
        async setQrCode(classroomId) {
            this.qrCodeUrl = await QRCode.toDataURL(classroomId);
        }
    }
}
</script>

<style lang="scss" scoped>
    .qr-code-width {
        min-width: 30rem;
    }
    .line-separator {
        min-width: 100%;
        border: solid 1px #9e9e9e !important;
        margin-bottom: 10px;
    }
</style>
