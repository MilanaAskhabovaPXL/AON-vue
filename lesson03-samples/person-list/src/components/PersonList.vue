<template>
  <div>
    <h1>Persons</h1>    
    <div v-for="(person, index) in persons" :key="`person-${person.id}`">
        <EditPerson 
            :person="person" 
            @update-event="update"
        />
    </div>
    <button @click = "fetchPersons">fetch persons from api</button>
    <pre v-if="store.errorMessage">{{ store.errorMessage }}</pre>    
  </div>
</template>

<script setup>
import { computed } from 'vue';
import EditPerson from './EditPerson.vue';
import { usePersonsStore } from '@/stores/persons';

const store = usePersonsStore();
const persons = computed(() => store.persons);

function update(payload) {
  const { id, name } = payload;
  store.updateName(id, name);
}

async function fetchPersons(){
  await store.fetchPersons();
}
</script>

