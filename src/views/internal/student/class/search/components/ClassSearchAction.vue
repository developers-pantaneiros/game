<template>
    <div>
        <button @click="add" type="button" class="nes-btn is-success float-button float-button--right">+</button>
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
