<template>
  <div>
    <class-form-name v-model="value" />
    <class-form-description v-model="value" />
  </div>
</template>

<script>
import ClassFormName from "../../detail/components/ClassFormName";
import ClassFormDescription from "../../detail/components/ClassFormDescription";

export default {
  name: "signin-inputs",
  components: {
    ClassFormName,
    ClassFormDescription
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
