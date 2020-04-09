<template>
  <div>
    <button type="submit" class="nes-btn is-success full-width margin-bottom-1">Criar conta</button>
    <router-link to="signin" class="nes-btn button-with-icon full-width">
      <font-awesome-icon size="lg" :icon="icons.faAngleLeft"/>
      Voltar
    </router-link>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default {
  name: "signup-actions",
  components: { FontAwesomeIcon },
  data() {
    return {
      icons: {
        faAngleLeft
      }
    }
  }
};
</script>
