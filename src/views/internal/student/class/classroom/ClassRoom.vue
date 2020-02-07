<template>
    <class-wrapper>
        <div v-if="isLoading">
            <loading/>
        </div>
        <div v-else>
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
        </div>
    </class-wrapper>
</template>

<script>
import Loading from "@/commons/components/Loading";
import actionTypes from "@/commons/constants/action-types";
import ClassWrapper from "../commons/ClassWrapper";
import ClassRoomTeacherCard from "./components/ClassRoomTeacherCard";

export default {
    name: "class-room",
    components: { Loading, ClassWrapper, ClassRoomTeacherCard },
    data() {
        return {
            uid: "",
            classFound: {},
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
        async findClass() {
            try {
                this.classFound = await this.$store.dispatch(actionTypes.FIND_CLASS, this.uid);
                this.teacher = await this.$store.dispatch(actionTypes.FIND_USER_BY_REFERENCE, this.classFound.teacher);
                this.students = await this.$store.dispatch(actionTypes.FIND_MANY_USERS_BY_REFERENCE, this.classFound.students);
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
