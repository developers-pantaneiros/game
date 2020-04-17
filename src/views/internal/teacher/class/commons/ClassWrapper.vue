<template>
    <div class="container container__full">
        <slot></slot>
        <bottom-navigation/>
    </div>
</template>

<script>
    import BottomNavigation from "@/commons/components/teacher/BottomNavigation";
    export default {
        name: "class-wraper",
        components: { BottomNavigation }
    }
</script>