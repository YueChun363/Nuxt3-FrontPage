<script setup lang='ts'>
import avatar from '~/assets/imgs/1.png'

const data = reactive({})
onMounted(() => {

})
</script>

<template>
    <div class="sticky top-0 bg-white">
        <div class="flex items-center justify-between px-2 py-2 max-w-7xl mx-auto md:px-6">
            <p class="flex gap-2">
                <strong class="text-xl text-[#18181B]">YC's Blog</strong>
                <el-tag type="primary" color="#eef2ff">Landing</el-tag>
            </p>
            <div class="border-2 rounded-full px-6 pt-1 hidden md:block">
                <el-anchor :offset="70" direction="horizontal">
                    <el-anchor-link href="#Features">
                        Features
                    </el-anchor-link>
                    <el-anchor-link href="#Pricing">
                        Pricing
                    </el-anchor-link>
                    <el-anchor-link href="#Testimonials">
                        Testimonials
                    </el-anchor-link>
                    <el-anchor-link href="#FAQ">
                        FAQ
                    </el-anchor-link>
                </el-anchor>

            </div>
            <div class="cursor-pointer">
                <div class="inline-block text-2xl  md:hidden">
                    <el-icon>
                        <el-icon-operation />
                    </el-icon>
                </div>
                <div class="hidden md:inline-block">
                    <el-avatar class="w-8 h-8" :src="avatar" alt="头像" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang='less'></style>