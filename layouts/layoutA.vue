<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue';

const data = reactive({})
onMounted(() => {

})
</script>

<template>
    <div>
        layoutA
        <slot />
    </div>
</template>

<style scoped lang='less'></style>