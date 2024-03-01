<template>

    DETAIL OF ITEM WITH ID: {{ productId }}
    <div class="card mb-3 mt-3" v-if="item">
        <div class="card-header">
            {{ item.name }}
        </div>
        <div class="card-body">
            <p>Price: {{ item.price }}</p>
            <p>id: {{ item.id }}</p>
            <button @click="addToCart(item)" class="btn btn-primary">Add To Cart</button>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import { useShoppingCartStore } from '@/stores/shoppingcart'

const route = useRoute();
const productsStore = useProductsStore();


const productId = route.params.id;
const item = productsStore.getById(productId);

const shoppingCartStore = useShoppingCartStore();
function addToCart(item) {
    shoppingCartStore.addItem(item);
}

</script>