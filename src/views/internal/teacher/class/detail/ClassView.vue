<template>
    <div class="center-text" v-if="canIShowClassContent">
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
        <img class="full-width" alt="QR Code" v-bind:src="qrCodeUrl"/>
    </div>
</template>

<script>
import actionTypes from "@/commons/constants/action-types";
import QRCode from "qrcode";

export default {
    name: "class-view",
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
        canIShowClassContent: function () {
            return !this.isLoading;
        }
    },
    methods: {
        async findClass() {
            try {
                const classFound = await this.$store.dispatch(actionTypes.FIND_CLASS, this.uid);
                this.setClassFound(classFound);
                await this.setQrCode(classFound.uid);
                this.changeLoadingStatus(false);
            } catch (error) {
                console.log(error);
            }
        },
        getUidFromUrl() {
            this.uid = this.$route.params.uid;
            this.findClass()
        },
        setClassFound(classFound) {
            this.classFound = classFound;
        },
        changeLoadingStatus(status) {
            this.isLoading = status;
        },
        async setQrCode(uid) {
            const qrCodeUrl = this.buildUrl(uid);
            this.qrCodeUrl = await QRCode.toDataURL(qrCodeUrl);
        },
        buildUrl(sufix) {
            const prefix = process.env.BASE_URL;
            const url = `${prefix}/student/classes/sign-up/${sufix}`;
            return url;
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
