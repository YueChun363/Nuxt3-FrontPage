<script setup lang='ts'>
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<template>
    <div>
        <h3>{{ counter }}</h3>
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
    </div>
</template>

<style scoped lang='less'></style>