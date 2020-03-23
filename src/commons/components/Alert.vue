<template>
  <modal :name="id" width="80%" height="auto" classes="nes-container is-rounded alert">
    <i v-if="octocat" class="nes-octocat animate"></i>
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
    confirmMessage: {
      type: String,
      required: true,
      default: ""
    },
    id: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true,
      default: ""
    },
    octocat: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
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
