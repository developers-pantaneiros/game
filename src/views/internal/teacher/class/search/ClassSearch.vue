<template>
    <div>
        <class-search-action @add="add"/>
        <div v-if="areThereClasses">
            <div class="margin-bottom-2">
                <h2 class="title">Minhas classes</h2>
                <p class="subtitle">Listagem de classes que ministro aulas.</p>
            </div>
            <class-search-card
                v-for="item in classes"
                v-bind:classValue="item"
                v-bind:key="item.uid"/>
        </div>
            <empty
                title="Ops, não encontramos nenhuma classe"
                subtitle="Tente criar uma classe e convidar seus alunos..."
                v-else/>
    </div>
</template>

<script>
import ClassSearchAction from "./components/ClassSearchAction";
import ClassSearchCard from "./components/ClassSearchCard";
import Empty from "@/commons/components/Empty";

import firebase from "firebase";
import actionTypes from "@/commons/constants/action-types";

export default {
    name: "class-search",
    components: { ClassSearchAction, ClassSearchCard, Empty },
    data() {
        return {
            user: {},
            classes: [],
            loading: true
        };
    },
    computed: {
        areThereClasses: function () {
            return this.classes.length > 0
        }
    },
    created() {
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
        add() {
            this.$router.push({ name: "teacherClassAdd" })
        }
    }
}
</script>
