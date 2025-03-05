<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/persons">Persons</RouterLink>
      </nav>
    </div>
  </header>
  <div class="router">
      <RouterView />
  </div>
</template>


<style scoped>
  .router{
    padding: 1em;
    border: 3px solid lightgrey;
  }
</style>

