<template>
    <class-wrapper class="class-teacher">
        <div v-if="canIShowClass" class="center-text class-details scrollable">
            <class-name
                    @isLoaded="isLoaded()"
            />
            <hr class="line-separator">
            <p class="title-classroom center-text">Estudantes da turma</p>
            <div class="students-list">
                <class-room-student-card v-model="students" />
            </div>
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
    import ClassName from "../../commons/ClassName";
    import actionTypes from "@/commons/constants/action-types";
    import ClassRoomStudentCard from "./ClassRoomStudentCard";
    import ClassWrapper from "../../../../teacher/class/commons/ClassWrapper";
    import Loading from "@/commons/components/Loading";

    export default {
        name: "ClassStudentsView",
        components: { ClassName, ClassRoomStudentCard, ClassWrapper, FontAwesomeIcon, Loading },
        data(){
            return {
                classFound: {},
                classroomId: null,
                icons: {
                    faAngleLeft
                },
                isLoadedClassName: false,
                isLoading: true,
                students: []
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
            async findStudentsClass() {
                try {
                    this.classFound = await this.$store.dispatch(actionTypes.FIND_CLASS, this.classroomId);
                    this.students = await this.$store.dispatch(actionTypes.FIND_MANY_USERS_BY_REFERENCE, this.classFound.students);
                    await this.afterLoading();
                } catch (error) {
                    console.log(error);
                }
            },
            getClassroomIdFromUrl() {
                this.classroomId = this.$route.params.classroomId;
                this.findStudentsClass()
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
            async isLoaded(status) {
                this.isLoadedClassName = status
            }
        }
    }
</script>

<style scoped>
    hr {
        border: solid 1px #9e9e9e;
        min-width: 100% !important;
    }
</style>