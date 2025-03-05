<template>
  <div class="main">
    <h2>id = {{person.id}}</h2>
    
    <div v-if="edit">
        <label :for="'name-' + person.id">Name: </label> 
        <input :id="'name-' + person.id" v-model="editName"> 
        <button @click="update">update</button> 
        <button @click="cancel">cancel</button>         
    </div>
    <div v-else>Name: {{ person.name}} <button @click="startEditing">edit</button>  </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const emit = defineEmits(['update-event']);
const props = defineProps({
  person: {
    type: Object,
    required: true
  }
});

const editName = ref(props.person.name);
const edit = ref(false)

watch(() => props.person.name, (newValue) => {      
    editName.value = newValue
});

function update() {
  let name = editName.value.trim();
  if ( name != props.person.name ){
      emit('update-event', { name, id: props.person.id });
  }
  edit.value = false;
}

function cancel(){
  editName.value = props.person.name;
  edit.value = false;
}

function startEditing(){
  edit.value = true;
}

</script>

<style scoped>
.main {
  margin: 10px;
  padding: 10px;
  border: 3px solid black;
}
</style>

