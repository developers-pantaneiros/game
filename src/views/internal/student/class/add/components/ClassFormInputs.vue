<template>
  <div>
    <class-form-code-reader v-model="value" />
    <class-form-code v-model="value" />
  </div>
</template>

<script>
import ClassFormCodeReader from "./ClassFormCodeReader";
import ClassFormCode from "./ClassFormCode";

export default {
  name: "signin-inputs",
  components: {
    ClassFormCodeReader,
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
