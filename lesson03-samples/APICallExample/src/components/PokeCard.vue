<template>
    <div class="m-2 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center">
        <h1 class="text-xl font-medium text-black mt-2">{{ pokemon.name.toUpperCase() }}</h1>
        <button
          class="bg-sky-600 text-white rounded-lg p-3 border-black mt-2" 
          @click="goToDetail(pokemon.url)">
          Details
        </button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'; 

const router = useRouter();

const props = defineProps({
  pokemon: Object
});

function goToDetail(url) {
    const id = getIdFromUrl(url);
    router.push(`/pokemon/${id}`);
}

function getIdFromUrl(url) {
    const urlParts = url.split('/');
    const potentialId = urlParts[urlParts.length - 2];
    return potentialId;
}
</script>

<style scoped>
</style>
