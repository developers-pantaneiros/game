<template>
    <div v-if="!isLoading">
        <center>
            <a href="#" class="nes-badge margin-bottom-1">
                <span class="is-dark">{{className}}</span>
            </a>
        </center>
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
                classroomId: '',
                isLoading: true
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
            afterLoading() {
                this.isLoading = status;
                this.$emit('isLoaded', status)
            },
            async getUidFromUrl() {
                this.classroomId = this.$route.params.classroomId;
                await this.findClass()
            },
            async findClass() {
                try {
                    const classFound =  await this.$store.dispatch(actionTypes.FIND_CLASS, this.classroomId);
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

</style>