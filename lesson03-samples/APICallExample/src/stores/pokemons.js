import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePokemonStore = defineStore('pokemon', {
    state: () => ({ pokeList: {}, favorites: [] }),
    getters: {
        getFavorites() {
            return this.favorites;
        },
        isFavorite() {
            return (pokemon) => this.favorites.some(fav => fav.id === pokemon.id);
        }
    },
    getters: {
        getFavorites() {
            return this.favorites;
        },
        isFavorite() {
            return (pokemon) => this.favorites.some(fav => fav.id === pokemon.id);
        }
    },
    getters: {
        getFavorites() {
            return this.favorites;
        }
    },
    actions: {
        async loadPokemonByIdAsync(pokemonId) {
            if (this.pokeList.pokemonId) {
                return new Promise(this.pokeList.pokemonId);
            }
            let data =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            this.pokeList.pokemonId = data.data;
            return data.data;
        },
        addToFavorites(pokemon) {
            if (!this.isFavorite(pokemon)) {
                this.favorites.push(pokemon);
            }
        },
        removeFromFavorites(pokemon) {
            this.favorites = this.favorites.filter(fav => fav.id !== pokemon.id);
        }

    }
})
