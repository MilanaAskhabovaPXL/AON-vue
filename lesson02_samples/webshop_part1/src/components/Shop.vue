<template>
    <div class="row">
        <ShopItem v-for="item in allItems" :key="item.name" :item="item" />
    </div>
</template>

<script setup>
import ShopItem from './ShopItem.vue';
import { ref } from 'vue';

const allItems = ref([
    {name: 'Shirt', price: 20, id: 1},
    {name: 'Pants', price: 40, id: 2},
    {name: 'Shoes', price: 60, id: 3},
    {name: 'Hat', price: 10, id: 4},
    {name: 'Socks', price: 5, id: 5}
])

</script>

<style scoped>

</style>