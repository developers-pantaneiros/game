<template>
    <class-wrapper>
        <div v-if="isLoading || isLoadedClassName">
            <loading/>
        </div>
        <div class="margin-bottom-2 ranking-details" v-else>
            <class-name
                    @isLoaded="isLoaded()"
            />
            <center>
                <a class="nes-badge center-box margin-top-2 margin-bottom-2 ">
                    <span class="is-warning">Ranking</span>
                </a>
            </center>
            <div style="margin-top: 10px" class="nes-container is-rounded with-title">
                <p style="font-size: 14px">
                    <center>
                        <a class="nes-badge margin-bottom-2">
                            <span class="is-dark">Desafio #1</span>
                        </a>
                    </center>
                </p>
                <div class="flex">
                    <class-room-student-card-ranking v-model="ranking" />
                </div>
            </div>
        </div>
    </class-wrapper>
</template>

<script>
    import actionTypes from "@/commons/constants/action-types";
    import ClassName from "../commons/ClassName";
    import ClassRoomStudentCardRanking from "../classroom/components/ClassRoomStudentCardRanking";
    import ClassWrapper from "../commons/ClassWrapper";
    import Loading from "@/commons/components/Loading";

    export default {
        name: "class-ranking",
        components: {ClassName, ClassRoomStudentCardRanking, ClassWrapper, Loading },
        data() {
            return {
                isLoadedClassName: false,
                isLoading: true,
                uid: null,
                ranking: []
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
                    this.ranking = await this.$store.dispatch(actionTypes.FIND_CLASS_RANKING_BY_CHALLENGE, {
                        classroomId: this.$route.params.classroomId,
                        challengeId: "gP99kKBmOfzBmBBYBNW2"
                    });
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

<style lang="stylus">
    .ranking-details
        overflow auto !important

        .flex
            display flex
            align-items center
            flex-wrap wrap
            justify-content center

</style>