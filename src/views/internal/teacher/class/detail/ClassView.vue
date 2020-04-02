<template>
    <div class="container">
        <div class="center-text" v-if="canIShowClass">
            <div id="class-view" class="margin-bottom-1 center-text">
                <h2 class="title">{{classFound.name}}</h2>
                <p class="subtitle">{{classFound.description}}</p>
                <p class="subtitle">Número de estudantes: {{classFound.students.length}}</p>
                <p class="subtitle">Criado em: {{getFormattedDate(classFound.createdAt)}} às {{getFormattedTime(classFound.createdAt)}}</p>
                <p class="subtitle">Convide os seus alunos para ingressarem na turma lendo o QR Code abaixo ou inserindo o código:</p>
            </div>
            <div class="nes-badge center-box">
                <span class="is-warning">{{classFound.uid}}</span>
            </div>
            <img class="qr-code-width" alt="QR Code" v-bind:src="qrCodeUrl"/>
            <audio-button style="margin-bottom: 40px" :tagId="'class-view'" />
            <button style="margin-top: 10px" type="button" class="nes-btn button-with-icon full-width" @click="backToClasses">
                <font-awesome-icon size="lg" :icon="icons.faAngleLeft"/>
                Voltar
            </button>
        </div>
        <div v-else>
            <loading/>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import AudioButton from "@/commons/components/AudioButton";
import Loading from "@/commons/components/Loading";
import actionTypes from "@/commons/constants/action-types";
import QRCode from "qrcode";

export default {
    name: "class-view",
    components: { FontAwesomeIcon, AudioButton, Loading },
    data() {
        return {
            uid: "",
            classFound: {},
            qrCodeUrl: "",
            isLoading: true,
            icons: {
                faAngleLeft
            }
        };
    },
    created() {
        this.getUidFromUrl();
    },
    computed: {
        canIShowClass: function () {
            return !this.isLoading;
        }
    },
    methods: {
        backToClasses() {
            this.$router.push({ name: "teacherClass"});
        },
        async findClass() {
            try {
                const classFound = await this.$store.dispatch(actionTypes.FIND_CLASS, this.uid);
                this.setClassFound(classFound);
                await this.afterLoading();
            } catch (error) {
                console.log(error);
            }
        },
        getUidFromUrl() {
            this.uid = this.$route.params.uid;
            this.findClass()
        },
        async afterLoading() {
            await this.setQrCode(this.classFound.uid);
            this.isLoading = status;
        },
        setClassFound(classFound) {
            this.classFound = classFound;
        },
        async setQrCode(uid) {
            this.qrCodeUrl = await QRCode.toDataURL(uid);
        },
        getFormattedDate(timestamp) {
            return new Date(timestamp.seconds * 1000).toLocaleDateString("pt-BR")
        },
        getFormattedTime(timestamp) {
            return new Date(timestamp.seconds * 1000).toLocaleTimeString("pt-BR")
        }
    }
}
</script>

<style lang="scss" scoped>
    .qr-code-width {
        min-width: 30rem;
    }
</style>
