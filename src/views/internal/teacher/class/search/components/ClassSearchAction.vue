<template>
    <div>
        <button @click="add" type="button" class="nes-btn button-with-icon is-success float-button float-button--right">
            <font-awesome-icon size="lg" :icon="icons.faPlus"/>
            Criar
        </button>
    </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default {
    name: "class-search-action",
    components: { FontAwesomeIcon },
    data() {
        return {
            icons: {
                faPlus
            }
        }
    },
    methods: {
        add() {
            this.$emit("add");
        }
    }
}
</script>
