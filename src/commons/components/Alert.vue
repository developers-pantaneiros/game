<template>
  <dialog class="nes-dialog is-rounded" :id="id">
    <form id="form-text" method="dialog">
      <i class="nes-octocat animate loading__icon"></i>
      <p class="title">{{title}}</p>
      <p>{{message}}</p>
      <p class="subtitle">{{info}}</p>
      <audio-button style="margin-bottom: 50px" :tagId="'form-text'" />
      <menu class="dialog-menu">
        <button class="nes-btn" @click="teste">{{confirmMessage}}</button>
      </menu>
    </form>
  </dialog>
</template>

<script>
// --- Importante ---
import AudioButton from "@/commons/components/AudioButton";
// Para abrir o alerta utilize: document.getElementById('ID_ESPECIFICADO').showModal();
export default {
  name: "alert",
  components: { AudioButton },
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
      default: ""
    },
    message: {
      type: String,
      required: true,
      default: ""
    },
    confirmMessage: {
      type: String,
      required: true,
      default: ""
    },
    info: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    teste() {
      this.$emit('teste');
    }

  }
};
</script>
