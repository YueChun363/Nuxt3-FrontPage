<script setup lang='ts'>

definePageMeta({
    layout: 'layout-a'
})
const data = reactive({})
onMounted(() => {

})
</script>

<template>
    <div>
        11
        <nuxt-link to="/test">
            <el-button>
                去test页
            </el-button>
        </nuxt-link>
    </div>
</template>

<style scoped lang='less'></style>