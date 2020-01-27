<template>
    <h1>Class Search Teacher</h1>
</template>

<script>
import firebase from "firebase";

export default {
    name: "class-search",
    data() {
        return {
            class: {},
            loading: true
        };
    },
    mounted() {
        this.findTeacherClasses()
    },
    methods: {
        async findTeacherClasses() {
            try {
                const uid = this.getCurrentUserUid();
                const reference = firebase.firestore().collection('users').doc(uid);
                const response = await firebase.firestore().collection('classes').where("teacher", "==", reference).get()
            } catch (error) {
            }

            // if (!this.userExists(uid)) {
            //     return
            // }
            
            // const reference = firebase.firestore().collection('users').doc(uid);
            // await firebase.firestore().collection('classes').where("teacher", "==", reference).get()
            //     .then(response => {
            //         response.forEach(document => {
            //             this.class = document.data();
            //         });
            //     })
            //     .catch(error => {
            //         console.log(error)
            //     })
        },
        getCurrentUserUid() {
            const uid = this.$store.state.user.uid
            return uid
        },
        userExists(uid) {
            return uid
        }
    }
}
</script>
