<template>
  <div class="wrapper-app wrapper-app__full">
    <router-view />
    <pounds-translator />
  </div>
</template>


<script>
  import PoundsTranslator from "./commons/components/PoundsTranslator";
export default {
  name: "App",
  components: {PoundsTranslator}
};
</script>

<style lang="stylus">
  .container
      padding 0
</style>
