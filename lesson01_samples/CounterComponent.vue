<template>
  <div>
    <h1>Quentin Tarantino Movies Counter</h1>
    <p>Number of movies: {{ count }}</p>
    <button @click="incrementCount">Increment</button>
  </div>
</template>

<script setup>
let count = 0;

function incrementCount() {
    count.value++;
}

</script>

<style scoped>

h1 {
  font-family: fantasy;
}

button {
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

</style>
