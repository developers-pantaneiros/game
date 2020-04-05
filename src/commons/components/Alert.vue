<template>
  <modal :name="id" width="80%" height="auto" classes="nes-container is-rounded alert">
    <i v-if="octocat" class="nes-octocat animate"></i>
    <form id="form-text" method="dialog">
      <h3 class="title">{{title}}</h3>
      <p class="subtitle margin-bottom-2">{{message}}</p>
      <menu class="dialog-menu">
        <button class="nes-btn" v-if="!isFeedback" @click="hideAlert">{{confirmMessage}}</button>
        <button class="nes-btn feedback-btn" v-else @click="goToForm">{{confirmMessage}}</button>
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
      isFeedback: {
        type: Boolean,
        required: false,
        default: false
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
      },
      goToForm() {
        window.location.replace("")
        this.$modal.hide(this.id);
      }
    }
  };
</script>

<style lang="stylus">
  .feedback-btn
    background-color #7349bd !important
    color #fff !important

  .feedback-btn:after
    box-shadow inset -4px -4px #421e82 !important

</style>
