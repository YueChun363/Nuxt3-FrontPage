<script setup lang='ts'>
definePageMeta({
    middleware: 'auth'
})
useSeoMeta({
    title: 'auth page',
    description: 'auth page description',
    ogTitle: 'auth page ogTitle',
    ogDescription: 'auth page ogDescription',
    ogImage: 'auth page ogImage',
    twitterTitle: 'auth page twitterTitle',
})

</script>

<template>
    <div>
        auth page
    </div>
</template>

<style scoped lang='less'></style>