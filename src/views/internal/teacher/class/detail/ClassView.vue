<template>
    <class-wrapper class="class-teacher">
        <div v-if="canIShowClass" class="scrollable">
            <class-name
                    @isLoaded="isLoaded()"
                    class="margin-bottom-1"
            />
            <div class="center-text">
                <p class="subtitle">{{classFound.description}}</p>
                <p class="subtitle">Número de estudantes: {{classFound.students.length}}</p>
                <p class="subtitle">Criado em: {{getFormattedDate(classFound.createdAt)}} às {{getFormattedTime(classFound.createdAt)}}</p>
                <hr class="line-separator">
                <p style="margin-bottom: 0" class="subtitle">Convide os seus alunos para ingressarem na turma lendo o QR Code abaixo ou inserindo o código:</p>
            </div>
            <div class="center-text">
                <img class="qr-code-width" alt="QR Code" v-bind:src="qrCodeUrl"/>
                <div class="nes-badge center-text center-box">
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
            </div>
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
    </class-wrapper>
</template>

<script>
    import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
    import {faAngleLeft, faCopy} from "@fortawesome/free-solid-svg-icons";
    import Alert from  "@/commons/components/Alert";
    import actionTypes from "@/commons/constants/action-types";
    import ClassName from "../commons/ClassName";
    import ClassWrapper from "../../../teacher/class/commons/ClassWrapper";
    import Loading from "@/commons/components/Loading";
    import QRCode from "qrcode";

    export default {
        name: "class-view",
        components: { Alert, ClassName, ClassWrapper, FontAwesomeIcon, Loading },
        data() {
            return {
                classroomId: "",
                classFound: {},
                message: '',
                qrCodeUrl: "",
                icons: {
                    faAngleLeft,
                    faCopy
                },
                isLoadedClassName: false,
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
            async isLoaded(status) {
                this.isLoadedClassName = status
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
    .class-teacher {
        background-color: #fff;
    }
    .qr-code-width {
        min-width: 30rem;
    }
    .line-separator {
        min-width: 100%;
        border: solid 1px #9e9e9e !important;
        margin-bottom: 10px;
    }
</style>
