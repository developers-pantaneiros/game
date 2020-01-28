<template>
    <img v-bind:src="qrCode" alt="QR Code"/>
</template>

<script>
import actionTypes from "@/commons/constants/action-types";
import QRCode from "qrcode";

export default {
    name: "class-view",
    data() {
        return {
            uid: "",
            qrCode: ""
        };
    },
    created() {
        this.getUidFromUrl();
    },
    methods: {
        async findClass() {
            try {
                const classFound = await this.$store.dispatch(actionTypes.FIND_CLASS, this.uid);
                console.log(classFound);

                const qrCodeUrl = this.buildUrl(classFound.uid);
                this.qrCode = await QRCode.toDataURL(qrCodeUrl);
            } catch (error) {
                console.log(error);
            }
        },
        getUidFromUrl() {
            this.uid = this.$route.params.uid;
            this.findClass()
        },
        buildUrl(sufix) {
            const prefix = process.env.BASE_URL;
            const url = `${prefix}/student/classes/sign-up/${sufix}`;
            return url;
        }
    }
}
</script>
