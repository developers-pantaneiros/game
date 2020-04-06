<template>
  <div class="wrapper-app wrapper-app__full">
    <router-view />
    <pounds-translator />
    <audio-button />
    <feedback-button />
  </div>
</template>


<script>
  import PoundsTranslator from "./commons/components/PoundsTranslator";
  import AudioButton from "./commons/components/AudioButton";
  import FeedbackButton from "./commons/components/FeedbackButton";

export default {
  name: "App",
  components: { PoundsTranslator, AudioButton, FeedbackButton }
};
</script>

<style lang="stylus">
  .container
      padding 0
</style>
