<template>
<main class="p-4">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
            <div class="md:flex-shrink-0">
                <img class="h-48 w-full object-cover md:w-48" :src="pokemon.sprites.front_default" :alt="pokemon.name" />
            </div>
            <div class="p-8">
                <h2 class="text-2xl font-bold text-gray-900">{{ pokemon.name.toUpperCase() }}</h2>
                <p class="mt-2 text-gray-600">Height: {{ pokemon.height }}</p>
                <p class="mt-2 text-gray-600">Weight: {{ pokemon.weight }}</p>
                <h3 class="mt-4 text-lg font-semibold">Types:</h3>
                <ul class="list-disc list-inside">
                    <li v-for="type in pokemon.types" :key="type.slot" class="text-gray-600">{{ type.type.name }}</li>
                </ul>
                <h3 class="mt-4 text-lg font-semibold">Abilities:</h3>
                <ul class="list-disc list-inside">
                    <li v-for="ability in pokemon.abilities" :key="ability.slot" class="text-gray-600">{{ ability.ability.name }} ({{ ability.is_hidden ? 'Hidden' : 'Visible' }})</li>
                </ul>
                <h3 class="mt-4 text-lg font-semibold">Stats:</h3>
                <ul class="list-disc list-inside">
                    <li v-for="stat in pokemon.stats" :key="stat.stat.name" class="text-gray-600">{{ stat.stat.name }}: {{ stat.base_stat }}</li>
                </ul>
                <h3 class="mt-4 text-lg font-semibold">Moves:</h3>
                <ul class="list-disc list-inside">
                    <li v-for="move in pokemon.moves" :key="move.move.name" class="text-gray-600">{{ move.move.name }}</li>
                </ul>
            </div>
        </div>
    </div>
</main>

</template>


<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;
const pokemon = ref(null);
axios({
    method: 'get',
    url: `https://pokeapi.co/api/v2/pokemon/${id}`
}).then((response) => {
    pokemon.value = response.data;
});
// Todo: fetch pokemon details via axios and show in UI!

</script>

<style scoped>

</style>
