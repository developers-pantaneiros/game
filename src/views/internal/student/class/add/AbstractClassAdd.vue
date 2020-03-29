<script>
  import actionTypes from "@/commons/constants/action-types";
  import firebase from "firebase";
  import getMessageError from "@/globals/utils/getMessageError.js";

  export default {
    name: "abstract-class-add",
    data() {
      return {
        classContent: {
          code: ""
        },
        user: "",
        error: ""
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
      },
      async add(code) {
        try {
          const user = this.buildUserReference();
          const classJoined = await this.$store.dispatch(actionTypes.JOIN_CLASS, {code, user});
          this.goToClassRoom(classJoined);
        } catch (error) {
          this.showError(error);
          console.log(error);
        }
      },
      buildUserReference() {
        const userReference = firebase.firestore().collection("users").doc(this.user.uid);
        return userReference
      },
      goToClassRoom(classJoined) {
        this.$router.push({
          name: "studentClassRoom",
          params: { uid: classJoined.uid }
        });
      },
      showError(error) {
        const errorMessage = getMessageError(error);
        this.error = errorMessage;
        this.$modal.show("class-add-alert");
      }
    }
  };
</script>
