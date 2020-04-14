<template>
    <class-wrapper>
        <div v-if="isLoading || isLoadedClassName">
            <loading/>
        </div>
        <div v-else class="margin-bottom-2">
            <class-name
                    @isLoaded="isLoaded()"
            />
            <center><a class="nes-badge center-box margin-top-2 margin-bottom-2 ">
                <span class="is-warning">Ranking</span>
            </a></center>
            <div style="margin-top: 10px" class="nes-container is-rounded with-title">
            </div>
        </div>
    </class-wrapper>
</template>

<script>
    import actionTypes from "@/commons/constants/action-types";
    import ClassName from "../commons/ClassName";
    import ClassWrapper from "../commons/ClassWrapper";
    import Loading from "@/commons/components/Loading";

    export default {
        name: "class-ranking",
        components: {ClassName, ClassWrapper, Loading},
        data() {
            return {
                isLoadedClassName: false,
                isLoading: true,
                uid: null
            }
        },
        created() {
            this.getUidFromUrl();
        },
        methods: {
            async afterLoading() {
                this.isLoading = status;
            },
            async findRanking() {
                try {
                    await this.afterLoading();
                } catch (error) {
                    console.log(error);
                }
            },
            async getUidFromUrl() {
                this.uid = this.$route.params.studentId;
                await this.findRanking()
            },
            isLoaded(status) {
                this.isLoadedClassName = status
            }
        }
    }
</script>

<style scoped>

</style>