<template>
    <div class="col-sm-12 col-lg-6">
        <div class="card mb-3 mt-3">
            <div class="card-header">
                {{ item.name }}
            </div>
            <div class="card-body">
                <p>Price: {{ item.price }}</p>
                <p>id: {{ item.id }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    item: Object
});

</script>

<style scoped>
</style>