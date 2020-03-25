<template>
    <div>
        <button @click="signOut" type="button" class="nes-btn float-button-left"><</button>
    </div>
</template>

<script>
    export default {
        name: "class-search-sign-out",
        methods: {
            signOut() {
                this.$emit("signOut");
            }
        }
    }
</script>
