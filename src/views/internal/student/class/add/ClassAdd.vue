<template>
  <section class="container">
    <div class="center-text">
      <h3 class="title">Ingressar em uma nova classe</h3>
      <p id="enter-class" class="subtitle">
        Para ingressar uma nova classe, leia o código QR Code ou digite o código manualmente no campo abaixo.
      </p>
      <audio-button class="margin-bottom-2" :tagId="'enter-class'" />
    </div>
    <form @submit.prevent="add(classContent.code)">
      <class-form-inputs v-model="classContent" />
      <class-form-actions />
    </form>
    <alert id="class-add-alert" title="Erro" :message="error" confirmMessage="Confirmar" />
  </section>
</template>

<script>
  import AbstractClassAddVue from "./AbstractClassAdd.vue";
  import Alert from "@/commons/components/Alert";
  import AudioButton from "@/commons/components/AudioButton";
  import ClassFormActions from "./components/ClassFormActions";
  import ClassFormInputs from "./components/ClassFormInputs";

  export default {
    name: "class-add",
    extends: AbstractClassAddVue,
    components: {
      Alert,
      AudioButton,
      ClassFormActions,
      ClassFormInputs
    }
  };
</script>
