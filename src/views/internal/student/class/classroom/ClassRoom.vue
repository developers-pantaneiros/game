<template>
    <class-wrapper>
        <div v-if="isLoading || isLoadedClassName">
            <loading/>
        </div>
        <div v-else>
            <class-name
                @isLoaded="isLoaded"
            />
            <div id="class-description" class="center-text">
                <p style="margin-top: 5px" class="subtitle">{{classFound.description}}</p>
                <p class="subtitle">Estudantes: {{students.length}}</p>
            </div>
            <hr class="margin-bottom-2">
            <div>
                <class-room-teacher-card v-model="teacher" />
            </div>
            <div class="center-button">
                <audio-button style="margin-top: 20px" :tagId="'class-description'" />
            </div>
        </div>
    </class-wrapper>
</template>

<script>
import {mapMutations} from 'vuex'
import Loading from "@/commons/components/Loading";
import actionTypes from "@/commons/constants/action-types";
import mutationTypes from "@/commons/constants/mutation-types";
import AudioButton from "@/commons/components/AudioButton";
import ClassWrapper from "../commons/ClassWrapper";
import ClassRoomTeacherCard from "./components/ClassRoomTeacherCard";
import ClassName from "../commons/ClassName";

export default {
    name: "class-room",
    components: { AudioButton, ClassName, ClassRoomTeacherCard, ClassWrapper, Loading },
    data() {
        return {
            classFound: {},
            isLoadedClassName: false,
            isLoading: true,
            students: [],
            teacher: {},
            uid: ""
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
        ...mapMutations([mutationTypes.SET_CLASSROOM]),
        async afterLoading() {
            this.isLoading = status;
        },
        async findClass() {
            try {
                this.classFound = await this.$store.dispatch(actionTypes.FIND_CLASS, this.uid);
                this.teacher = await this.$store.dispatch(actionTypes.FIND_USER_BY_REFERENCE, this.classFound.teacher);
                this.students = await this.$store.dispatch(actionTypes.FIND_MANY_USERS_BY_REFERENCE, this.classFound.students);
                this.setClassroom(this.classFound);
                await this.afterLoading();
            } catch (error) {
                console.log(error);
            }
        },
        getUidFromUrl() {
            this.uid = this.$route.params.uid;
            this.findClass()
        },
        isLoaded(status) {
            this.isLoadedClassName = status
        }
    }
}
</script>
