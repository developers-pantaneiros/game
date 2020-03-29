<script>
    import firebase from "firebase";

    export default {
        name: "abstract-class-add",
        data() {
            return {
                user: ""
            };
        },
        created() {
            this.getCurrentUserUid();
        },
        methods: {
            getCurrentUserUid() {
                firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                        this.user = user;
                    } else {
                        this.goToSigninPage();
                    }
                });
            },
            goToSigninPage() {
                this.$router.push({ name: "signin" });
            }
        }
    };
</script>
