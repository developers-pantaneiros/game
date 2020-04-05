<template>
    <div v-if="!isLoading">
            <center>
                <a href="#" class="nes-badge margin-bottom-1">
                    <span class="is-dark">{{className}}</span>
                </a>
            </center>
            <hr>
    </div>
</template>

<script>
    import actionTypes from "@/commons/constants/action-types";
    import Loading from "@/commons/components/Loading";

    export default {
        name: "ClassName",
        components: {Loading},
        data() {
            return {
                className: '',
                isLoading: true,
                uid: ''
            }
        },
        created() {
            this.getUidFromUrl();
        },
        computed: {
            canIShowClass: function () {
                return !this.isLoading;
            }
        },
        methods: {
            async afterLoading() {
                this.isLoading = status;
                this.$emit('isLoaded', status)
            },
            getUidFromUrl() {
                this.uid = this.$route.params.uid;
                this.findClass()
            },
            async findClass() {
                try {
                    const classFound =  await this.$store.dispatch(actionTypes.FIND_CLASS, this.uid);
                    this.className = classFound.name
                    await this.afterLoading();
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>

<style lang="stylus">
    hr
        border solid 1px #9e9e9e
</style>