<script setup lang='ts'>

definePageMeta({
    layout: 'layout-b',
})
const data = reactive({})
onMounted(() => {

})
function toSonTestPage() {
    navigateTo('/test/testSon')
}
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
        <el-button round @click="toSonTestPage">
            去testSon子路由页面
        </el-button>
        <div>
            <NuxtPage :page-key="route => route.fullPath" />
        </div>
    </div>
</template>

<style scoped lang='less'></style>