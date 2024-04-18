<script setup lang='ts'>

</script>

<template>
    <div>
        <el-container>
            <el-header>
                <BaseHeader />
            </el-header>
            <el-main>
                <slot />
            </el-main>
            <el-footer>
                <BaseFooter />
            </el-footer>
        </el-container>
    </div>
</template>

<style scoped lang='less'></style>