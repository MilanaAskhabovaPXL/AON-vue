<template>
    <div class="row">
        <ShopItem v-for="item in store.productList" :key="item.name" :item="item" />
    </div>
</template>

<script setup>
import ShopItem from './ShopItem.vue';
import { useProductsStore } from '../stores/products'
import { ref } from 'vue';

const allItems = ref()
const store = useProductsStore();
</script>

<style scoped>

</style>