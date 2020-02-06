<template>
    <class-wrapper>
        <loading/>
    </class-wrapper>
</template>

<script>
import Loading from "@/commons/components/Loading";
import actionTypes from "@/commons/constants/action-types";
import QRCode from "qrcode";
import ClassWrapper from "./ClassWrapper.vue";

export default {
    name: "class-view",
    components: { Loading, ClassWrapper },
    data() {
        return {
            uid: "",
            classFound: {},
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
            this.isLoading = status;
        },
        setClassFound(classFound) {
            this.classFound = classFound;
        }
    }
}
</script>
