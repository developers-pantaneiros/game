<template>
  <section class="nes-container">
    <section class="message-list">
      <section class="message -left">
        <i class="nes-bcrikko"></i>
        <div class="nes-balloon from-left">
          <p>Olá. Seja bem-vindo ao GAME! Nós temos aventuras incríveis pela frente.</p>
        </div>
      </section>
      <section class="message -left">
        <i class="nes-bcrikko"></i>
        <div class="nes-balloon from-left">
          <p>Pressione o botão abaixo para continuar.</p>
        </div>
      </section>
      <section class="message -right">
        <router-link class="nes-btn is-success" to="/signin">Continuar</router-link>
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: "greetings"
};
</script>

<style lang="scss" scoped>
section.message-list {
  display: flex;
  flex-direction: column;
}
.message-list > .message {
  display: flex;
  margin-top: 2rem;
}
.message-list > .message > .nes-balloon {
  max-width: 550px;
}
.message-list > .message i {
  align-self: flex-end;
}
.message-list > .message.-left {
  align-self: flex-start;
}
.message-list > .message.-right {
  align-self: flex-end;
}
.message-list > .message.-left i {
  margin-right: 2rem;
}
.message-list > .message.-right i {
  margin-left: 2rem;
}
.icon-list > .blur-filter {
  filter: blur(10px);
}
</style>
