<template>
  <modal :name="id" width="80%" height="auto" classes="nes-container is-rounded alert">
    <form id="form-text" method="dialog">
      <h3 class="title">{{title}}</h3>
      <p class="subtitle margin-bottom-2">{{message}}</p>
      <menu class="dialog-menu">
        <button class="nes-btn" @click="hideAlert">{{confirmMessage}}</button>
      </menu>
      <br />
      <audio-button :tagId="'form-text'" />
    </form>
  </modal>
</template>

<script>
import AudioButton from "@/commons/components/AudioButton";

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
    }
  },
  methods: {
    hideAlert() {
      this.$modal.hide(this.id);
    }
  }
};
</script>
