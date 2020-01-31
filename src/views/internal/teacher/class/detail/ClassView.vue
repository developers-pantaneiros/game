<template>
    <div class="center-text" v-if="canIShowClass">
        <div class="margin-bottom-2 center-text">
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
    </div>
    <div v-else>
        <loading/>
    </div>
</template>

<script>
import Loading from "@/commons/components/Loading";
import actionTypes from "@/commons/constants/action-types";
import QRCode from "qrcode";

export default {
    name: "class-view",
    components: { Loading },
    data() {
        return {
            uid: "",
            classFound: {},
            qrCodeUrl: "",
            isLoading: true
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
