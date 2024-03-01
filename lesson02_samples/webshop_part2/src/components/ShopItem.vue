<template>
    <div class="col-sm-12 col-lg-6">
        <div class="card mb-3 mt-3">
            <div class="card-header">
                {{ item.name }}
            </div>
            <div class="card-body">
                <p>Price: {{ item.price }}</p>
                <p>id: {{ item.id }}</p>
                <button @click="addToCart(item)" class="btn btn-primary">Add To Cart</button>
                <button @click="goToDetail(item)" class="btn btn-info">Go To Detail</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useShoppingCartStore } from '@/stores/shoppingcart'
import { useRouter } from 'vue-router'

const router = useRouter();

const store = useShoppingCartStore();

const props = defineProps({
    item: Object
});

function addToCart(item) {
    store.addItem(item);
}

function goToDetail(item) {
    router.push('/itemdetail/' + item.id);
}

</script>

<style scoped>
</style>