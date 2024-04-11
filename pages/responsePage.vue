<script setup lang='ts'>

const list = ref([
    {
        id: 1,
        name: '1'
    },
    {
        id: 2,
        name: '2'
    },
    {
        id: 3,
        name: '3'
    },
    {
        id: 4,
        name: '4'
    },
    {
        id: 5,
        name: '5'
    },
    {
        id: 6,
        name: '6'
    },
    {
        id: 7,
        name: '7'
    },
    {
        id: 8,
        name: '8'
    },
    {
        id: 9,
        name: '9'
    },
    {
        id: 10,
        name: '10'
    },
    {
        id: 11,
        name: '11'
    },
    {
        id: 12,
        name: '12'
    },
    {
        id: 13,
        name: '13'
    },
    {
        id: 14,
        name: '14'
    },
])
</script>

<template>
    <div class="w-[250px] bg-green-700 flex items-center mx-1 justify-center">
        <div class="w-[100px] h-[50px] overflow-hidden bg-red-300 text-amber-400 lg:text-amber-100 border-2 rounded-md">
            哈哈哈哈哈哈哈哈哈
        </div>
        <div class="w-[100px] h-[50px] overflow-hidden bg-red-300 text-amber-400 lg:text-amber-100 border-2 rounded-md">
            嚯嚯嚯嚯嚯嚯嚯嚯嚯
        </div>
    </div>
    <div class="container columns-2 hover:columns-3 gap-11 min-h-80 bg-green-600">
        <div class=" bg-red-600" v-for="(item, index) in list" :key="index">
            {{ item.name }}
        </div>
    </div>

</template>

<style scoped lang='less'></style>