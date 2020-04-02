<template>
  <button class="nes-btn is-primary" @click="falarTexto()">
    <font-awesome-icon size="lg" :icon="icons.faVolumeUp"/>
  </button>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
export default {
  components: { FontAwesomeIcon },
  data() {
      return {
          icons: {
              faVolumeUp
          }
      }
  },
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
