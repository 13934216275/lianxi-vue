<template>
    <div>
    <router-link to="/picture">图片</router-link>
    <router-link to="/joke">笑话</router-link>
    <router-link to="/dt">动图</router-link>
    <!--页面跳转展示的区域-->
    <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "yidong",
    }

</script>

<style scoped>

</style>