<template>
    <div>
        <button @click="add" type="button" class="nes-btn is-success float-button">+</button>
    </div>
</template>

<script>
export default {
    name: "class-search-action",
    methods: {
        add() {
            this.$emit("add");
        }
    }
}
</script>
