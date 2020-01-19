<template>
  <div>
    <signup-name-input v-model="value" />
    <signup-email-input v-model="value" />
    <signup-role-select v-model="value" />
    <signup-password-input v-model="value" />
  </div>
</template>

<script>
import SignupNameInput from "./SignupNameInput";
import SignupEmailInput from "./SignupEmailInput";
import SignupRoleSelect from "./SignupRoleSelect";
import SignupPasswordInput from "./SignupPasswordInput";

export default {
  name: "signin-inputs",
  components: {
    SignupNameInput,
    SignupEmailInput,
    SignupRoleSelect,
    SignupPasswordInput
  },
  props: {
    value: {
      type: Object,
      required: true,
      default: {}
    }
  }
};
</script>
