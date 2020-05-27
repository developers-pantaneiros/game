<template>
  <carousel :navigationEnabled="true" :perPage="1" :autoplayTimeout="60000" autoplay>
    <slide>
      <section>
        <i class="nes-octocat animate"></i>
        <h3 class="title">GameOfStudent</h3>
        <p class="subtitle">Seja bem-vindo ao GameOfStudent! Nós temos muitas aventuras pela frente...</p>
      </section>
    </slide>
    <slide>
      <section>
        <i class="nes-icon is-large like"></i>
        <h3 class="title">Viva uma aventura!</h3>
        <p class="subtitle">
          Convide os seus amigos e professores para viverem aventuras incríveis
          em uma cidade enquanto exercitam os seus conhecimentos adquiridos em
          aula.
        </p>
      </section>
    </slide>
    <slide>
      <section>
        <i class="nes-icon trophy is-large"></i>
        <h3 class="title">Conquiste troféus!</h3>
        <p class="subtitle">
          Desafie e seja desafiado! Conquiste prémios e troféus de acordo com o
          seu rendimento nas fases e exercícios.
        </p>
      </section>
    </slide>
    <slide>
      <section>
        <i class="nes-icon is-large star"></i>
        <h3 class="title">Exercite!</h3>
        <p class="subtitle">
          Seja capaz de associar problemas do cotidiano de uma cidade com
          conteúdos aprendidos em sala de aula. Pressione o botão "Jogar" para
          começar agora mesmo.
        </p>
      </section>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "greetings-carousel",
  components: { Carousel, Slide }
};
</script>
