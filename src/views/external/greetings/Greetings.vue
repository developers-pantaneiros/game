<template>
  <section class="nes-container with-title is-centered">
    <p class="title">Game - {{version}}</p>
    <p>Seja bem-vindo ao Game. Nós temos muitas aventuras pela frente. Pressione o botão "Jogar" para começar.</p>
    <router-link to="signin" class="nes-btn is-success">Jogar</router-link>
  </section>
</template>

<script>
import { version } from "@/../package.json";
export default {
  name: "greetings",
  data() {
    return {
      version: version
    }
  }
};
</script>
