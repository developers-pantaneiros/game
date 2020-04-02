<template>
    <div class="container container__full center-text">
        <div v-if="canIShowClasses">
            <class-search-sign-out @signOut="signOut"/>
            <class-search-action @add="add"/>
            <div id="list-class-student">
                <div class="margin-bottom-2">
                    <h2 class="title">Minhas classes</h2>
                    <p class="subtitle">Lista de classes que eu estudo.</p>
                </div>
                <class-search-card
                    v-for="item in classes"
                    v-bind:classValue="item"
                    v-bind:key="item.uid"
                />
                <div class="center-button">
                    <audio-button :tagId="'list-class-student'" />
                </div>
            </div>
        </div>
        <div v-else-if="canIShowEmptyAlert">
            <class-search-sign-out @signOut="signOut"/>
            <class-search-action @add="add"/>
            <empty
                id="class-not-found-student"
                title="Ops, não encontramos nenhuma classe"
                subtitle="Tente ingressar em uma nova classe por meio no botão abaixo..."/>
            <div class="center-button">
                <audio-button :tagId="'class-not-found-student'" />
            </div>
        </div>
        <div v-else>
            <loading/>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import mutationTypes from "@/commons/constants/mutation-types";
import AudioButton from "@/commons/components/AudioButton";
import ClassSearchAction from "./components/ClassSearchAction";
import ClassSearchCard from "./components/ClassSearchCard";
import ClassSearchSignOut from "./components/ClassSearchSignOut";
import Empty from "@/commons/components/Empty";
import Loading from "@/commons/components/Loading";

import firebase from "firebase";
import actionTypes from "@/commons/constants/action-types";

export default {
    name: "class-search",
    components: { AudioButton, ClassSearchAction, ClassSearchCard, ClassSearchSignOut, Empty, Loading },
    data() {
        return {
            user: {},
            classes: [],
            isLoading: true,
            isEmpty: false
        };
    },
    computed: {
        canIShowClasses: function () {
            return !this.isLoading && !this.isEmpty
        },
        canIShowEmptyAlert: function () {
            return this.isEmpty
        }
    },
    created() {
        this.getCurrentUserUid();
    },
    methods: {
        ...mapMutations([mutationTypes.SET_MYCLASSES]),
        async findStudentClasses() {
            try {
                const classes = await this.$store.dispatch(actionTypes.FIND_STUDENT_CLASSES, this.user.uid);
                this.setMyClasses(classes)
                this.setClasses(classes);
                this.afterLoading();
            } catch (error) {
                console.log(error);
            }
        },
        setClasses(classes) {
            this.classes = classes
        },
        afterLoading() {
            this.isLoading = false;
            this.isEmpty = this.classes.length <= 0;
        },
        getCurrentUserUid() {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    this.user = user;
                    this.findStudentClasses();
                } else {
                    this.goToSigninPage();
                }
            });
        },
        goToSigninPage() {
            this.$router.push({ name: "signin" });
        },
        add() {
            this.$router.push({ name: "studentClassAdd" })
        },
        async signOut() {
            try {
                await this.$store.dispatch(actionTypes.SIGNOUT)
                this.goToSigninPage()
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style lang="stylus">
    .center-button
        display flex !important
        justify-content center !important
</style>