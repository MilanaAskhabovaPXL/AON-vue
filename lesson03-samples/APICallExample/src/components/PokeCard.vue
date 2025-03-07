<template>
  <v-card class="mx-auto" max-width="344" v-if="pokemonDetails">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="text-h5">
          {{ pokemon.name.toUpperCase() }} 
        </v-card-title>

        <v-card-subtitle>
          <div v-if="pokemonDetails && pokemonDetails.types">
            <span class="ability" v-for="type in pokemonDetails.types" :key="type.slot">
              {{ type.type.name }} 
            </span>
          </div>
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
            class="bg-sky-500 text-black rounded-lg p-2 border-black mt-2" 
            @click="goToDetail(pokemon.url)"
          >  
            Details
          </v-btn>

          <v-btn
            class="bg-sky-500 text-black rounded-lg p-2 border-black mt-2" 
            @click="toggleFavorite(pokemonDetails)"
          >  
            {{ text }}
          </v-btn>
        </v-card-actions>
      </div>

      <v-avatar
        class="ma-3"
        rounded="0"
        size="130"
      >
        <v-img :src="pokemonDetails.sprites.front_default" :alt="pokemonDetails.name"></v-img>
      </v-avatar>

      <span class="number">#{{ pokemonDetails.id }}</span>
    </div>
  </v-card>
</template>

<script setup>
import { useRouter } from 'vue-router'; 
import { ref, onMounted, computed, watch } from 'vue';
import axios from 'axios';
import { usePokemonStore } from '@/stores/pokemons';

const pokemonDetails = ref(null);
const router = useRouter();
const pokemonStore = usePokemonStore();
const text = ref('Favorite');

const props = defineProps({
  pokemon: Object,
});

const isPokemonFavorite = computed(() => {
  return pokemonStore.isFavorite(pokemonDetails.value);
});

watch(isPokemonFavorite, (newVal) => {
  text.value = newVal ? 'Unfavorite' : 'Favorite';
});

onMounted(async () => {
    try {
        const response = await axios.get(props.pokemon.url);
        pokemonDetails.value = response.data;
        text.value = isPokemonFavorite.value ? 'Unfavorite' : 'Favorite';
    } catch (error) {
        console.error(error);
    }
});

function goToDetail(url) {
    const id = getIdFromUrl(url);
    router.push(`/pokemon/${id}`);
}

function toggleFavorite(pokemon) {
    if (isPokemonFavorite.value) {
        removeFromFavorites(pokemon);
    } else {
        addToFavorites(pokemon);
    }
}

function addToFavorites(pokemon) {
    console.log('Adding to favorites:', pokemon);
    pokemonStore.addFavorite(pokemon);
    console.log('Current favorites:', pokemonStore.getFavorites);
}

function removeFromFavorites(pokemon) {
    console.log('Removing from favorites:', pokemon);
    pokemonStore.removeFromFavorites(pokemon);
    console.log('Current favorites:', pokemonStore.getFavorites);
}

function getIdFromUrl(url) {
    const urlParts = url.split('/');
    const potentialId = urlParts[urlParts.length - 2];
    return potentialId;
}
</script>

<style scoped>
.number {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
}
.mx-auto{
  position: relative;
}
.ability {
  margin-right: 5px;
  border: 2px;
  background-color: orange;
  padding: 2px;
  border-radius: 5px;
  font-size: 20px;
}
.bg-sky-600 {
  margin-left: 8px;
}
</style>
