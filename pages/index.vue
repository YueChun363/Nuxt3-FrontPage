<script setup lang='ts'>

definePageMeta({
    layout: 'layout-a'
})
const { data } = await useFetch('/api/test')
const message = data.value?.message
const title = ref('首页')
useSeoMeta({
    title: () => title.value,
    description: '首页描述',
    ogTitle: '首页',
    ogDescription: '首页描述',
})
onMounted(() => {

})
</script>

<template>
    <div>
        11
        <p>请求api数据结果：{{ message }}</p>
        <nuxt-link to="/test">
            <el-button>
                去test页
            </el-button>
        </nuxt-link>
    </div>
</template>

<style scoped lang='less'></style>