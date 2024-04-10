<script setup lang='ts'>

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
        <nuxt-link to="/">
            <el-icon>
                <el-icon-home-filled></el-icon-home-filled>
            </el-icon>
            <el-button round>
                去首页
            </el-button>
        </nuxt-link>
    </div>
</template>

<style scoped lang='less'></style>