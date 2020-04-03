<template>
  <div class="wrapper-app wrapper-app__full">
    <router-view />
    <pounds-translator />
    <FeebbackButton />
  </div>
</template>


<script>
  import PoundsTranslator from "./commons/components/PoundsTranslator";
  import FeebbackButton from "./commons/components/FeedbackButton";

export default {
  name: "App",
  components: {FeebbackButton, PoundsTranslator}
};
</script>

<style lang="stylus">
  .container
      padding 0
</style>
