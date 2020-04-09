<template>
    <div>
        <button @click="signOut" type="button" class="nes-btn button-with-icon float-button float-button--left">
            <font-awesome-icon size="lg" :icon="icons.faSignOutAlt"/>
            Sair
        </button>
    </div>
</template>

<script>
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
    import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
    
    export default {
        name: "class-search-sign-out",
        components: { FontAwesomeIcon },
        data() {
            return {
                icons: {
                    faSignOutAlt
                }
            }
        },
        methods: {
            signOut() {
                this.$emit("signOut");
            }
        }
    }
</script>
