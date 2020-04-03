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
  components: {PoundsTranslator},
  mounted() {
    this.teste()
  },
  methods: {
    teste() {
      console.log('teste')
    }
  }
};
</script>

<style lang="stylus">
  .container
      padding 0
</style>
