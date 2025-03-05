<template>
  <div>
    <h1 v-if="showTitle" id="title">Todos</h1>
  </div>


  <!-- 
  <div v-for="todo in todos" :key="todo.id" data-test="todo" :class="[todo.completed ? 'completed' : '']">
    {{ todo.text }}
  </div> 
  -->
  
  <!-- 
  div v-for="todo in todos" :key="todo.id" data-test="todo" :class="[todo.completed ? 'completed' : '']">
    {{ todo.text }}
    <input type="checkbox" v-model="todo.completed" data-test="todo-checkbox" /> 
  </div>  
  -->


  <!-- 
  <form data-test="form" @submit.prevent="createTodo">
    <input data-test="new-todo" v-model="newTodo" />
    <input type="submit">
  </form> 
  -->

</template>

<script setup>
import { ref } from 'vue';

const todos = ref([
  {
    id: 1,
    text: 'Learn Vue 3',
    completed: false
  }
]
);

/*
const newTodo = ref('');

function createTodo() {
  todos.value.push({
    id: todos.value.length + 1,
    text: newTodo.value,
    completed: false
  });
  newTodo.value = '';
}
*/

defineProps({
  showTitle: Boolean
});
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>