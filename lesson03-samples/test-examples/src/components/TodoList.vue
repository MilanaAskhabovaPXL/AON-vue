<template>
  <div>
    <h1 v-if="showTitle" id="title">Todos</h1>
  </div>

<!--     
  <div v-for="todo in todos" :key="todo.id" data-test="todo">
      {{ todo.text }}
    </div> 
-->

<!-- 
  <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodo" />
    </form> 
-->

<!-- 
      <input
        type="checkbox"
        v-model="todo.completed"
        data-test="todo-checkbox"
      /> 
-->

</template>

<script setup>
import { ref } from 'vue';

const todos = ref([
  {
    id: 1,
    text: 'Learn Vue 3',
    completed: false
  }]
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
