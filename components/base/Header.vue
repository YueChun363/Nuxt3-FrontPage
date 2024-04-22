<script setup lang='ts'>
import avatar from '~/assets/imgs/1.png'

let drawer = ref(false)
const handleAnchorClick = () => {
    setTimeout(() => {
        drawer.value = false
    }, 50);
}
</script>

<template>
    <div class="sticky top-0 bg-[#fafafa] border-b md:border-b-0 z-50">
        <div class="flex items-center justify-between px-3 md:px-6 py-4 md:py-2 max-w-7xl mx-auto ">
            <p class="flex gap-2 md:flex-1">
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
            <div class="px-6 pt-1 md:hidden">
                <client-only>
                    <el-drawer v-model="drawer" size="250" direction="rtl">
                        <el-anchor :offset="70" @click="handleAnchorClick">
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
                    </el-drawer>
                </client-only>
            </div>
            <div class="flex justify-end cursor-pointer md:flex-1 ">
                <div class="inline-block text-2xl  md:hidden">
                    <el-icon @click="drawer = true">
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