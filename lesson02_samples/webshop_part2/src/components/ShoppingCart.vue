<template>
    <div>
        <h1>SHOPPING CART {{ store.totalPrice }}</h1>
        <ul>
            <li v-for="item in store.products">{{ item.name }} {{ item.price }}</li>
        </ul>

        <button @click="store.clearCart()" class="btn btn-danger">CLEAR</button>
    </div>
</template>

<script setup>
import { useShoppingCartStore } from '@/stores/shoppingcart'

const store = useShoppingCartStore();
</script>