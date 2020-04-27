<template>
    <class-wrapper class="class-teacher">
        <div v-if="canIShowClass" class="center-text">
            <class-name
                    @isLoaded="isLoaded()"
                    class="margin-bottom-1"
            />
            <hr class="line-separator">
            <img class="qr-code-width" alt="QR Code" v-bind:src="qrCodeUrl"/>
            <button
                    type="button"
                    class="nes-btn margin-bottom-2 full-width"
                    @click="goToClassView"
            ><font-awesome-icon size="lg" :icon="icons.faAngleLeft"/> Voltar</button>
        </div>
        <div v-else>
            <loading/>
        </div>
    </class-wrapper>
</template>

<script>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
    import ClassName from '../../commons/ClassName'
    import ClassWrapper from "../../../../teacher/class/commons/ClassWrapper";
    import QRCode from "qrcode";
    import Loading from "@/commons/components/Loading";

    export default {
        name: "classQrCodeView",
        components: { ClassName, ClassWrapper, FontAwesomeIcon, Loading },
        data(){
            return {
                classroomId: null,
                icons: {
                    faAngleLeft
                },
                isLoadedClassName: false,
                isLoading: true,
                qrCodeUrl: ''
            }
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
                this.isLoading = status;
            },
            getClassroomIdFromUrl() {
                this.classroomId = this.$route.params.classroomId;
                this.setQrCode(this.classroomId)
            },
            goToClassView() {
                this.$router.push({
                    name: "teacherClassView",
                    params: {
                        teacherId: this.$store.state.user.uid,
                        classroomId: this.classroomId
                    }
                })
            },
            async setQrCode(classroomId) {
                this.qrCodeUrl = await QRCode.toDataURL(classroomId);
                this.afterLoading();
            },
            async isLoaded(status) {
                this.isLoadedClassName = status
            }
        }
    }
</script>

<style lang="scss" scoped>
    .class-teacher {
        background-color: #fff;
    }
    .qr-code-width {
        min-width: 35rem;
    }
    hr {
        border: solid 1px #9e9e9e;
        min-width: 100% !important;
    }
</style>