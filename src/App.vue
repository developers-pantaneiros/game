<template>
  <div class="wrapper-app wrapper-app__full">
    <router-view />
    <pounds-translator />
    <feedback-button />
  </div>
</template>


<script>
  import FeedbackButton from "./commons/components/FeedbackButton";
  import PoundsTranslator from "./commons/components/PoundsTranslator";

export default {
  name: "App",
  components: {FeedbackButton, PoundsTranslator}
};
</script>

<style lang="stylus">
  .container
      padding 0
</style>
