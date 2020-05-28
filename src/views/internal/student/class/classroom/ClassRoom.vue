<template>
    <class-wrapper>
        <div v-if="isLoading || isLoadedClassName">
            <loading/>
        </div>
        <div class="class-details scrollable" v-else>
            <class-name
                    @isLoaded="isLoaded"
            />
            <hr class="margin-top-2">
            <div class="center-text">
                <p style="margin-top: 5px" class="subtitle">{{classFound.description}}</p>
                <p class="subtitle">Estudantes: {{students.length}}</p>
            </div>
            <hr class="margin-bottom-2">
            <div class="margin-bottom-3">
                <class-room-teacher-card v-model="teacher" />
            </div>
            <div class="classmates center-text nes-container is-rounded">
                <span class="center-text">Colegas de turma</span>
            </div>
            <div v-if="hasClassmates()" class="students-list">
                <class-room-student-card v-model="classmates" />
            </div>
            <div v-else class="center-text margin-top-2">
                <i class="nes-octocat animate"></i>
                <p style="margin-top: 10px" class="subtitle">Ainda não existem colegas na turma.</p>
            </div>
        </div>
    </class-wrapper>
</template>

<script>
    import actionTypes from "@/commons/constants/action-types";
    import ClassName from "../commons/ClassName";
    import ClassWrapper from "../commons/ClassWrapper";
    import ClassRoomStudentCard from "./components/ClassRoomStudentCard";
    import ClassRoomTeacherCard from "./components/ClassRoomTeacherCard";
    import Loading from "@/commons/components/Loading";

    export default {
        name: "class-room",
        components: { ClassName, ClassRoomStudentCard, ClassRoomTeacherCard, ClassWrapper, Loading },
        data() {
            return {
                classroomId: "",
                classFound: {},
                classmates: [],
                isLoadedClassName: false,
                isLoading: true,
                students: [],
                teacher: {},
                uid: ""
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
                this.isLoading = status;
            },
            async findClass() {
                try {
                    this.classFound = await this.$store.dispatch(actionTypes.FIND_CLASS, this.classroomId);
                    this.teacher = await this.$store.dispatch(actionTypes.FIND_USER_BY_REFERENCE, this.classFound.teacher);
                    this.students = await this.$store.dispatch(actionTypes.FIND_MANY_USERS_BY_REFERENCE, this.classFound.students);
                    this.setClassmates(this.students);
                    await this.afterLoading();
                } catch (error) {
                    console.log(error);
                }
            },
            getClassroomIdFromUrl() {
                this.classroomId = this.$route.params.classroomId;
                this.findClass()
            },
            hasClassmates() {
                return this.classmates.length > 0 ? true : false
            },
            isLoaded(status) {
                this.isLoadedClassName = status
            },
            setClassmates(students) {
                for (let i = 0; i < students.length ; i++) {
                    if (students[i].uid !== this.$store.state.user.uid) {
                        this.classmates.push(students[i])
                    }
                }
            }
        }
    }
</script>

<style lang="stylus">
    .class-details
        padding 15px !important
        overflow auto

        .students-list
            display flex
            justify-content center
            margin-top 5px !important

        .students-list-empty
            display flex
            align-items center

        .classmates
            background-color #212529;
            color: #fff
            padding 2px 0 !important

</style>
