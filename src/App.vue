<template>
  <div class="wrapper-app wrapper-app__full">
    <router-view />
    <pounds-translator />
    <audio-button />
  </div>
</template>


<script>
  import AudioButton from "./commons/components/AudioButton";
  import PoundsTranslator from "./commons/components/PoundsTranslator";
export default {
  name: "App",
  components: { AudioButton, PoundsTranslator }
};
</script>

<style lang="stylus">
  .container
      padding 0
</style>
