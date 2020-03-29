<template>
  <div>
    <class-form-code v-model="value" />
  </div>
</template>

<script>
import ClassFormCode from "./ClassFormCode";

export default {
  name: "signin-inputs",
  components: {
    ClassFormCode
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  }
};
</script>
