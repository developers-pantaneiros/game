<template>
    <div class="select">
        <label style="font-size: 12px" class="select__label" for="challenge_select">Filtro</label>
        <div class="nes-select">
            <select class="form-input" v-model="value.uid" id="challenge_select" required @change="goToFilter(value.uid)">
                <option class="form-input"
                        value
                        disabled
                        selected
                        hidden
                        v-for="selection in selecione"
                        :key="selection.index"
                        :value="selection.uid"
                >Selecione</option>
                <option
                        class="form-input"
                        v-for="challenge in value"
                        :key="challenge.index"
                        :value="challenge.uid"
                >{{challenge.name}}</option>
            </select>
        </div>
    </div>
</template>

<script>
    export default {
        name: "class-ranking-challenge-select",
        props: {
            value: {
                type: Array,
                required: true,
                default: []
            }
        },
        data() {
            return {
                selecione: {
                    name: "Selecione",
                    uid: "selecione"
                }
            }
        },
        methods: {
            goToFilter(challengeUid) {
                this.$emit('goToFilter', challengeUid)
            }
        }
    }
</script>

<style lang="scss">
    .select {
        margin-bottom: 2rem;
        &__label {
            width: 100%;
            text-align: initial;
        }
    }
</style>