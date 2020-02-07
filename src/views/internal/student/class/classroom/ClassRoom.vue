<template>
    <class-wrapper>
        <div v-if="isLoading">
            <loading/>
        </div>
        <div v-else class="center-text">
            <h2 class="title">{{classFound.name}}</h2>
            <p class="subtitle">{{classFound.description}}</p>
        </div>
    </class-wrapper>
</template>

<script>
import Loading from "@/commons/components/Loading";
import actionTypes from "@/commons/constants/action-types";
import QRCode from "qrcode";
import ClassWrapper from "../commons/ClassWrapper";

export default {
    name: "class-room",
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
                this.classFound = await this.$store.dispatch(actionTypes.FIND_CLASS, this.uid);
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
        }
    }
}
</script>
