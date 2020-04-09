<template>
    <class-wrapper>
        <div v-if="isLoading">
            <loading/>
        </div>
        <div class="class-details" v-else>
            <div class="margin-bottom-2 center-text">
                <a href="#" class="nes-badge center-box margin-bottom-1">
                    <span class="is-dark">{{classFound.name}}</span>
                </a>
                <p class="subtitle">{{classFound.description}}</p>
                <p class="subtitle">Estudantes: {{students.length}}</p>
            </div>
            <div>
                <class-room-teacher-card v-model="teacher" />
            </div>
            <p class="title-classroom center-text">Colegas de turma</p>
            <div v-if="hasClassmates()" class="students-list">
                <class-room-student-card v-model="classmates" />
            </div>
            <div v-else class="center-text">
                <i class="nes-octocat animate"></i>
                <p style="margin-top: 10px" class="subtitle">Ainda não existem colegas na turma.</p>
            </div>
        </div>
    </class-wrapper>
</template>

<script>
    import actionTypes from "@/commons/constants/action-types";
    import ClassWrapper from "../commons/ClassWrapper";
    import ClassRoomStudentCard from "./components/ClassRoomStudentCard";
    import ClassRoomTeacherCard from "./components/ClassRoomTeacherCard";
    import Loading from "@/commons/components/Loading";

    export default {
        name: "class-room",
        components: { ClassRoomStudentCard, ClassRoomTeacherCard, ClassWrapper, Loading },
        data() {
            return {
                uid: "",
                classFound: {},
                classmates: [],
                teacher: {},
                students: [],
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
            async afterLoading() {
                this.isLoading = status;
            },
            async findClass() {
                try {
                    this.classFound = await this.$store.dispatch(actionTypes.FIND_CLASS, this.uid);
                    this.teacher = await this.$store.dispatch(actionTypes.FIND_USER_BY_REFERENCE, this.classFound.teacher);
                    this.students = await this.$store.dispatch(actionTypes.FIND_MANY_USERS_BY_REFERENCE, this.classFound.students);
                    this.setClassmates(this.students);
                    await this.afterLoading();
                } catch (error) {
                    console.log(error);
                }
            },
            getUidFromUrl() {
                this.uid = this.$route.params.uid;
                this.findClass()
            },
            hasClassmates() {
                return this.classmates.length > 0 ? true : false
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

        .title-classroom
            margin-top 30px !important
            font-size 15px

        .students-list
            display flex
            justify-content center
            margin-top 5px !important

        .students-list-empty
            display flex
            align-items center

</style>
