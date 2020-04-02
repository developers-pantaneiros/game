<template>
  <div>
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
