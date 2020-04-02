<template>
  <div>
    <router-view />
    <FeebbackButton />
  </div>

</template>


<script>
  import FeebbackButton from "./commons/components/FeedbackButton";

export default {
  name: "App",
  components: {FeebbackButton}
};
</script>
