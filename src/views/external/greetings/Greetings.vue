<template>
  <section class="container center-text">
    <div class="margin-bottom-2 carousel padding-left-2 padding-right-2">
      <greetings-carousel />
    </div>
    <router-link to="signin" class="nes-btn is-success">Jogar</router-link>
  </section>
</template>

<script>
import GreetingsCarousel from "./components/GreetingsCarousel";
import { version } from "@/../package.json";

export default {
  name: "greetings",
  components: { GreetingsCarousel },
  data() {
    return {
      version: version
    };
  }
};
</script>
