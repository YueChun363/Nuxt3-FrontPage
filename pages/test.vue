<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue';

definePageMeta({
    layout: 'layout-b',
})
const data = reactive({})
onMounted(() => {

})
</script>

<template>
    <div>
        333
        <nuxt-link to="/">去首页</nuxt-link>
    </div>
</template>

<style scoped lang='less'></style>