<template>
    <div class="child-element-card" :style="{backgroundColor: favouriteColor}">
        <h1>Child Element: {{ name }}</h1>
        <p>My favorite color is {{ favouriteColor }}</p>
        
    </div>
</template>

<script setup>
const props = defineProps(['favouriteColor', 'name']);
</script>

<style scoped>
.child-element-card {
    background-color: #f4f4f4;
    padding: 20px;
    margin: 20px 20px;
    border-radius: 5px;
    width: calc(100% / 3 - 40px);
}
</style>
