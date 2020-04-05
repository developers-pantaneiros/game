<template>
  <div>
    <button class="audio-button" @click="openModal">
      <font-awesome-icon size="lg" :icon="icons.faVolumeUp"/>
    </button>
    <alert
      id="audio-button"
      title="Instruções de uso do áudio"
      message="Para utilizar o recurso de áudio na aplicação, selecione manualmente os textos que deseja ouvir."
      confirmMessage="Confirmar"
    />
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import Alert from '@/commons/components/Alert'

export default {
  components: { FontAwesomeIcon, Alert },
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
    this.setupLanguageAudioAPI();
  },
  methods: {
    setupLanguageAudioAPI() {
      responsiveVoice.setDefaultVoice("Brazilian Portuguese Female");
    },
    openModal() {
      this.$modal.show("audio-button");
    }
  }
};
</script>
