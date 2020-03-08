<template>
  <i class="nes-icon youtube is-medium" @click="falarTexto()"></i>
</template>

<script>
export default {
  props: {
    tagId: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.configurarIdiomaApiAudio();
  },
  methods: {
    configurarIdiomaApiAudio() {
      responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");
    },
    falarTexto() {
      responsiveVoice.speak(document.getElementById(this.tagId).textContent);
    }
  }
};
</script>