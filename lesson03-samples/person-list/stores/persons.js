import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

export const usePersonsStore = defineStore('persons', () => {
  const persons = ref([]);
  const errorMessage = ref("");

  
  async function fetchPersons() {
    try {
      errorMessage.value = ""; 
      const response = await axios.get('http://localhost:3000/persons'); 
      persons.value = response.data; 
    } catch (e) {
      errorMessage.value = e.message; 
    }
  }

  
  async function updateName(id, name) {
    try {
      errorMessage.value = ""; 
      const response = await axios.put(`http://localhost:3000/persons/${id}`, { name }); 
      const person = persons.value.find(p => p.id === id);
      if (person) {
        person.name = name; 
      }
    } catch (e) {
      errorMessage.value = e.message; 
    }
  }

  const getPersonById = computed(() => (id) => {
    return persons.value.find(p => p.id === id) || null;
  });

  return { persons, errorMessage, updateName, getPersonById, fetchPersons };
});

