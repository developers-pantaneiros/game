<template>
    <class-search-card v-model="classes[0]" v-if="classes.length > 0" />
    <class-search-empty v-else />
</template>

<script>
import ClassSearchCard from "./components/ClassSearchCard";
import ClassSearchEmpty from "./components/ClassSearchEmpty";

import firebase from "firebase";
import actionTypes from "@/commons/constants/action-types";

export default {
    name: "class-search",
    components: { ClassSearchCard, ClassSearchEmpty },
    data() {
        return {
            user: {},
            classes: [],
            loading: true
        };
    },
    mounted() {
        this.getCurrentUserUid();
    },
    methods: {
        async findTeacherClasses() {
            try {
                const classes = await this.$store.dispatch(actionTypes.FIND_CLASSES, this.user.uid);
                this.classes = classes;
            } catch (error) {
                console.log(error);
            }
        },
        getCurrentUserUid() {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    this.user = user;
                    this.findTeacherClasses();
                } else {
                    this.goToSigninPage();
                }
            });
        },
        goToSigninPage() {
            this.$router.push({ name: "signin" });
        },
    }
}
</script>
