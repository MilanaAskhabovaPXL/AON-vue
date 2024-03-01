<template>
    <div>
        <h4 class="d-flex" v-show="store.totalNumberOfProducts"><i class="bi bi-basket2"></i> {{ store.totalNumberOfProducts }}</h4>
    </div>
</template>

<script setup>
import { useShoppingCartStore } from '@/stores/shoppingcart'

const store = useShoppingCartStore();

</script>