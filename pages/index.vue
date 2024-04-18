<script setup lang='ts'>

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
        content
    </div>
</template>

<style scoped lang='less'></style>